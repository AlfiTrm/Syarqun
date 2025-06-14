import { concepts } from "../data/Concept";
import { useAccordion } from "../hooks/useAccordion";
import ConceptCard from "./ConceptCard";

export const Card = () => {
  const { toggle, isActive } = useAccordion();

  console.log(concepts);
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {concepts.map((concept) => (
        <ConceptCard
          key={concept.id}
          {...concept}
          expanded={isActive(concept.id)}
          onToggle={() => toggle(concept.id)}
        />
      ))}
    </div>
  );
};
