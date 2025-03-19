import { SongItemProps } from "../../../types/song";

export const SongItem: React.FC<SongItemProps> = ({
    song,
    alternateBackground,
  }) => {
    const bgColor = alternateBackground ? "bg-sky-200" : "bg-cyan-50";
  
    return (
      <article className="flex w-full">
        <div
          className={`flex-1 shrink gap-2.5 self-stretch px-3 my-auto ${bgColor} border border-black border-solid basis-0 min-h-[30px] w-[183px]`}
        >
          {song.title}
        </div>
        <div
          className={`flex relative gap-2.5 justify-center items-start px-4 h-full ${bgColor} border-t border-r border-b border-black w-[168px]`}
        >
          <div className="z-0 flex-1 shrink my-auto basis-0">{song.artist}</div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/14bb5753f7cfbf79a157e1277dfff2c39438342e0aa23c35e932b5142ca1757b?placeholderIfAbsent=true&apiKey=a226a7c559bc4551b65dd4e277a7ef1c"
            alt="More options"
            className="object-contain absolute inset-y-1 z-0 shrink-0 self-start aspect-square left-[141px] right-[5px] w-[22px]"
          />
        </div>
      </article>
    );
  };
  