export default function Rating({ rating }: { rating: number }) {
  return (
    <>
      <div className="flex justify-content-center mt-3">
        {[...Array(10)].map((_, index) => (
          <span
            key={index}
            className={`${index + 1 > Math.floor(rating) ? "opacity-20" : ""}`}>
            {"⭐"}
          </span>
        ))}
      </div>
      <div className="flex justify-content-center my-2">
        {"Рейтинг: "}
        {rating}
        {"/10"}
      </div>
    </>
  );
}
