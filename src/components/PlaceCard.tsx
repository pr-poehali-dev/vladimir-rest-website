import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface PlaceCardProps {
  name: string;
  description: string;
  image: string;
  category: string;
  rating?: number;
}

const PlaceCard = ({ name, description, image, category, rating }: PlaceCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-primary">
          {category}
        </div>
      </div>
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-display font-bold text-foreground group-hover:text-primary transition-colors">
            {name}
          </h3>
          {rating && (
            <div className="flex items-center gap-1 text-accent">
              <Icon name="Star" size={18} className="fill-accent" />
              <span className="font-semibold">{rating}</span>
            </div>
          )}
        </div>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
};

export default PlaceCard;
