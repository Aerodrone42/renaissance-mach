
interface LocalityAttractionsProps {
  attractions: string[];
}

export default function LocalityAttractions({ attractions }: LocalityAttractionsProps) {
  return (
    <div className="mb-12">
      <h2 className="font-playfair text-2xl font-bold mb-4 text-renaissance-primary">Points d'intérêt</h2>
      <ul className="space-y-2 list-disc pl-5">
        {attractions.map((attraction, index) => (
          <li key={index} className="text-renaissance-dark/80">{attraction}</li>
        ))}
      </ul>
    </div>
  );
}
