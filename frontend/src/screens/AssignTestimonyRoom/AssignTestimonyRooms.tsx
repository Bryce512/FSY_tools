import React, { useEffect, useState } from 'react';
// import styles from "../AssignTestimonyRoom/AssignTestimonyRooms.module.css";
import TopNavBar from '../../components/TopNavBar';
import ActionButtons from "./ActionButtons";
// import RoomTable from "./RoomTable";
import BottomNavBar from '../../components/BottomNavBar';
import { Group, Room } from '../../types/types';

// const AssignTestimonyRooms: React.FC = () => {
//   return (
//     <div className={styles.container}>
//       <link
//         rel="stylesheet"
//         href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
//       />

//       <main className={styles.mainContent}>
//         <RoomTable />
//       </main>
//     </div>
//   );
// };

// export default AssignTestimonyRooms;

const RoomAssignment: React.FC = () => {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [unassignedGroups, setUnassignedGroups] = useState<Group[]>([]);

  useEffect(() => {
    fetch('/api/room-assignment') // Adjust this to match your API route
      .then((res) => res.json())
      .then((data) => {
        setRooms(data.rooms);
        setUnassignedGroups(data.unassignedGroups);
      })
      .catch((err) => console.error('Error fetching data:', err));
  }, []);

  return (
    <div className="p-4">
      <TopNavBar title="Assign Rooms" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {rooms.map((room) => (
          <div key={room.id} className="p-4 border rounded-lg shadow-lg">
            <h3 className="font-bold text-lg">
              {room.name} (Capacity: {room.capacity})
            </h3>
            <p className="text-sm">Total Load: {room.load}</p>
            <h4 className="mt-2 font-semibold">Groups:</h4>
            <ul>
              {room.groups.map((group) => (
                <li key={group.id} className="ml-2">
                  {group.name} ({group.size} ppl)
                </li>
              ))}
            </ul>
            {room.conductingMaleAC && (
              <p className="mt-2 text-sm">
                Conducting Male AC: {room.conductingMaleAC}
              </p>
            )}
            {room.conductingFemaleAC && (
              <p className="text-sm">
                Conducting Female AC: {room.conductingFemaleAC}
              </p>
            )}
          </div>
        ))}
      </div>
      {unassignedGroups.length > 0 && (
        <div className="mt-6 p-4 bg-red-100 border border-red-400 rounded-lg">
          <h3 className="text-lg font-bold text-red-600">Unassigned Groups</h3>
          <ul>
            {unassignedGroups.map((group) => (
              <li key={group.id}>
                {group.name} ({group.size} ppl)
              </li>
            ))}
          </ul>
        </div>
      )}
      <ActionButtons />
      <BottomNavBar />
    </div>
  );
};

export default RoomAssignment;
