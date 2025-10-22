import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface Place {
  id: number;
  name: string;
  description: string;
  category: string;
  image: string;
  coordinates: { lat: number; lng: number };
}

const places: Place[] = [
  {
    id: 1,
    name: 'Золотые ворота',
    description: 'Памятник древнерусской архитектуры XII века, символ Владимира',
    category: 'Архитектура',
    image: 'https://cdn.poehali.dev/projects/00feff43-c02a-4976-bec1-86e4c56f84c4/files/736e39c4-d176-43f3-a4d9-c906295f0e67.jpg',
    coordinates: { lat: 56.1292, lng: 40.3956 }
  },
  {
    id: 2,
    name: 'Успенский собор',
    description: 'Белокаменный храм с золотыми куполами, объект всемирного наследия ЮНЕСКО',
    category: 'Храмы',
    image: 'https://cdn.poehali.dev/projects/00feff43-c02a-4976-bec1-86e4c56f84c4/files/ecb95610-74ad-4e24-9df3-5024f9559c91.jpg',
    coordinates: { lat: 56.1294, lng: 40.4078 }
  },
  {
    id: 3,
    name: 'Дмитриевский собор',
    description: 'Шедевр владимиро-суздальского зодчества с уникальной каменной резьбой',
    category: 'Храмы',
    image: 'https://cdn.poehali.dev/projects/00feff43-c02a-4976-bec1-86e4c56f84c4/files/ecb95610-74ad-4e24-9df3-5024f9559c91.jpg',
    coordinates: { lat: 56.1289, lng: 40.4089 }
  },
  {
    id: 4,
    name: 'Парк Пушкина',
    description: 'Любимое место отдыха горожан с прудом и детскими площадками',
    category: 'Парки',
    image: 'https://cdn.poehali.dev/projects/00feff43-c02a-4976-bec1-86e4c56f84c4/files/f061b39a-889e-4f22-9c40-3dca7742327f.jpg',
    coordinates: { lat: 56.1356, lng: 40.4003 }
  },
  {
    id: 5,
    name: 'Смотровая площадка',
    description: 'Панорамный вид на Клязьму и заречные просторы',
    category: 'Панорамы',
    image: 'https://cdn.poehali.dev/projects/00feff43-c02a-4976-bec1-86e4c56f84c4/files/f061b39a-889e-4f22-9c40-3dca7742327f.jpg',
    coordinates: { lat: 56.1279, lng: 40.4112 }
  },
  {
    id: 6,
    name: 'Патриарший сад',
    description: 'Исторический парк с фруктовыми деревьями и монастырскими стенами',
    category: 'Парки',
    image: 'https://cdn.poehali.dev/projects/00feff43-c02a-4976-bec1-86e4c56f84c4/files/736e39c4-d176-43f3-a4d9-c906295f0e67.jpg',
    coordinates: { lat: 56.1267, lng: 40.4056 }
  }
];

const categories = ['Все', 'Архитектура', 'Храмы', 'Парки', 'Панорамы'];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);

  const filteredPlaces = selectedCategory === 'Все' 
    ? places 
    : places.filter(place => place.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground py-6 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Icon name="MapPin" size={32} className="text-accent" />
              <div>
                <h1 className="text-3xl font-display font-bold">Владимир</h1>
                <p className="text-sm text-primary-foreground/80">Путеводитель по городу</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="secondary" size="sm">
                <Icon name="Phone" size={16} className="mr-2" />
                Контакты
              </Button>
            </div>
          </div>
        </div>
      </header>

      <section className="relative h-[500px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${places[0].image})`,
            filter: 'brightness(0.7)'
          }}
        />
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-4 animate-fade-in">
              Откройте для себя Владимир
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto animate-fade-in">
              Древняя столица Северо-Восточной Руси с белокаменными храмами и богатой историей
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-wrap gap-3 mb-8 justify-center">
          {categories.map(category => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? 'default' : 'outline'}
              className="transition-all"
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-display font-bold mb-6 flex items-center gap-2">
              <Icon name="Compass" size={28} className="text-accent" />
              Места для посещения
            </h3>
            <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
              {filteredPlaces.map((place) => (
                <Card 
                  key={place.id}
                  className="overflow-hidden cursor-pointer transition-all hover:shadow-xl hover:scale-[1.02] animate-scale-in"
                  onClick={() => setSelectedPlace(place)}
                >
                  <div className="flex gap-4 p-4">
                    <img 
                      src={place.image} 
                      alt={place.name}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-display font-semibold text-lg">{place.name}</h4>
                        <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded-full">
                          {place.category}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">{place.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="sticky top-24">
            <h3 className="text-2xl font-display font-bold mb-6 flex items-center gap-2">
              <Icon name="Map" size={28} className="text-accent" />
              Карта города
            </h3>
            <Card className="overflow-hidden">
              <div className="aspect-square bg-muted relative">
                <iframe
                  src="https://yandex.ru/map-widget/v1/?ll=40.407070%2C56.129057&z=13&l=map"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  className="absolute inset-0"
                />
              </div>
              {selectedPlace && (
                <div className="p-4 bg-card border-t-4 border-accent">
                  <h4 className="font-display font-semibold text-lg mb-2">{selectedPlace.name}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{selectedPlace.description}</p>
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1">
                      <Icon name="Navigation" size={16} className="mr-2" />
                      Маршрут
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <Icon name="Share2" size={16} className="mr-2" />
                      Поделиться
                    </Button>
                  </div>
                </div>
              )}
            </Card>
          </div>
        </div>

        <section className="bg-card rounded-2xl p-8 shadow-lg">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="flex justify-center">
                <Icon name="Clock" size={48} className="text-accent" />
              </div>
              <h4 className="font-display font-semibold text-xl">Богатая история</h4>
              <p className="text-muted-foreground">Более 850 лет культурного наследия</p>
            </div>
            <div className="space-y-2">
              <div className="flex justify-center">
                <Icon name="Church" size={48} className="text-accent" />
              </div>
              <h4 className="font-display font-semibold text-xl">Храмы ЮНЕСКО</h4>
              <p className="text-muted-foreground">Памятники всемирного наследия</p>
            </div>
            <div className="space-y-2">
              <div className="flex justify-center">
                <Icon name="Trees" size={48} className="text-accent" />
              </div>
              <h4 className="font-display font-semibold text-xl">Природа и парки</h4>
              <p className="text-muted-foreground">Живописные места для отдыха</p>
            </div>
          </div>
        </section>
      </div>

      <footer className="bg-primary text-primary-foreground py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Icon name="MapPin" size={24} className="text-accent" />
            <span className="font-display font-semibold text-xl">Владимир</span>
          </div>
          <p className="text-sm text-primary-foreground/80">
            © 2024 Туристический портал Владимира
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;