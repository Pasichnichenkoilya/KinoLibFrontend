export default function GenrePills(props: { genres: string[] }) {
  return (
    <div className="flex flex-wrap gap-2 text-white">
      {props.genres.map((genre) => (
        <span
          style={{
            borderColor: "#2b2b2b",
          }}
          key={genre}
          className="border-2 border-round-3xl py-2 px-3 genre-pill">
          {genre}
        </span>
      ))}
    </div>
  );
}
