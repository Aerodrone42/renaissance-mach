
interface LocalityAttractionsProps {
  attractions: string[];
}

export default function LocalityAttractions({ attractions }: LocalityAttractionsProps) {
  return (
    <div className="mb-12">
      <h2 className="font-playfair text-2xl font-bold mb-4 text-renaissance-primary">Pourquoi visiter notre bar-restaurant-épicerie</h2>
      <ul className="space-y-4">
        {attractions.map((attraction, index) => (
          <li key={index} className="flex items-start">
            <div className="h-6 w-6 rounded-full bg-renaissance-secondary/30 flex items-center justify-center text-renaissance-primary mr-3 shrink-0 mt-0.5">
              {index + 1}
            </div>
            <p className="text-renaissance-dark/80">{attraction}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
