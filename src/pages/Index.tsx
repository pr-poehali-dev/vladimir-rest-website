import { useState } from "react";
import PlaceCard from "@/components/PlaceCard";
import InteractiveMap from "@/components/InteractiveMap";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const places = [
  {
    id: 1,
    name: "Золотые ворота",
    description: "Памятник древнерусской архитектуры XII века, символ города Владимира",
    image: "https://cdn.poehali.dev/projects/00feff43-c02a-4976-bec1-86e4c56f84c4/files/82cf1c7d-420d-4131-8c4b-bdcc2d68e632.jpg",
    category: "Архитектура",
    rating: 4.8,
    position: [56.1285, 40.3955] as [number, number]
  },
  {
    id: 2,
    name: "Успенский собор",
    description: "Выдающийся памятник белокаменного зодчества домонгольской Руси",
    image: "https://cdn.poehali.dev/projects/00feff43-c02a-4976-bec1-86e4c56f84c4/files/428c5086-7cb0-47de-9b39-dfc5b6f7a0ee.jpg",
    category: "Архитектура",
    rating: 4.9,
    position: [56.1294, 40.4067] as [number, number]
  },
  {
    id: 3,
    name: "Патриарший парк",
    description: "Живописный парк с прудами и прогулочными дорожками в центре города",
    image: "https://cdn.poehali.dev/projects/00feff43-c02a-4976-bec1-86e4c56f84c4/files/6ec7fa69-d7ab-4cad-9236-bd8a5cb797f1.jpg",
    category: "Природа",
    rating: 4.6,
    position: [56.1320, 40.4100] as [number, number]
  },
  {
    id: 4,
    name: "Музей хрусталя",
    description: "Уникальная коллекция изделий из хрусталя и стекла",
    image: "https://cdn.poehali.dev/projects/00feff43-c02a-4976-bec1-86e4c56f84c4/files/82cf1c7d-420d-4131-8c4b-bdcc2d68e632.jpg",
    category: "Музеи",
    rating: 4.5,
    position: [56.1255, 40.3945] as [number, number]
  },
  {
    id: 5,
    name: "Дмитриевский собор",
    description: "Жемчужина белокаменной резьбы древнерусских мастеров",
    image: "https://cdn.poehali.dev/projects/00feff43-c02a-4976-bec1-86e4c56f84c4/files/428c5086-7cb0-47de-9b39-dfc5b6f7a0ee.jpg",
    category: "Архитектура",
    rating: 4.9,
    position: [56.1290, 40.4085] as [number, number]
  },
  {
    id: 6,
    name: "Набережная Клязьмы",
    description: "Популярное место для прогулок с видом на реку и окрестности",
    image: "https://cdn.poehali.dev/projects/00feff43-c02a-4976-bec1-86e4c56f84c4/files/6ec7fa69-d7ab-4cad-9236-bd8a5cb797f1.jpg",
    category: "Природа",
    rating: 4.4,
    position: [56.1400, 40.3800] as [number, number]
  }
];

const categories = ["Все", "Архитектура", "Природа", "Музеи"];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("Все");

  const filteredPlaces = selectedCategory === "Все" 
    ? places 
    : places.filter(place => place.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-background">
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-primary text-primary-foreground p-3 rounded-xl shadow-lg">
                <Icon name="MapPin" size={28} />
              </div>
              <div>
                <h1 className="text-3xl font-display font-bold text-foreground">Владимир</h1>
                <p className="text-muted-foreground">Откройте красоту древнего города</p>
              </div>
            </div>
            <Button className="gap-2 shadow-lg">
              <Icon name="Heart" size={18} />
              Избранное
            </Button>
          </div>
        </div>
      </header>

      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <h2 className="text-5xl font-display font-bold mb-6 text-foreground">
              Места для отдыха во Владимире
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Древняя столица Руси приглашает вас насладиться её архитектурными жемчужинами, 
              живописными парками и богатым культурным наследием
            </p>
          </div>

          <div className="flex items-center justify-center gap-3 mb-12 flex-wrap">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="gap-2 shadow-md hover:shadow-lg transition-all"
              >
                {category === "Все" && <Icon name="Grid3x3" size={18} />}
                {category === "Архитектура" && <Icon name="Building2" size={18} />}
                {category === "Природа" && <Icon name="Trees" size={18} />}
                {category === "Музеи" && <Icon name="Library" size={18} />}
                {category}
              </Button>
            ))}
          </div>

          <div className="mb-20">
            <InteractiveMap places={filteredPlaces} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPlaces.map((place) => (
              <div key={place.id} className="animate-fade-in">
                <PlaceCard {...place} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-white/80 backdrop-blur-md border-t border-border mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-display font-bold text-xl mb-4 flex items-center gap-2">
                <Icon name="MapPin" size={24} className="text-primary" />
                Владимир
              </h3>
              <p className="text-muted-foreground">
                Путеводитель по главным достопримечательностям древнего города
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Категории</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="hover:text-primary cursor-pointer transition-colors">Архитектура</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Природа</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Музеи</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-muted-foreground">
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={18} />
                  info@vladimir-tourism.ru
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={18} />
                  +7 (4922) 123-456
                </p>
              </div>
            </div>
          </div>
          <div className="text-center pt-8 border-t border-border text-muted-foreground">
            <p>© 2024 Владимир Туризм. Откройте для себя историю России</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
