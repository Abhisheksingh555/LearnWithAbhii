export default function Cardnumber({ totalNumber, color, name }) {
  return (
    <div className={`${color} border rounded-3xl w-72 h-40 p-8 flex flex-col justify-center items-center text-white shadow-2xl transform hover:scale-105 transition-transform`}>
      <p className="text-2xl font-semibold">{name}</p>
      <span className="text-5xl font-bold mt-4">{totalNumber}</span>
    </div>
  );
}
