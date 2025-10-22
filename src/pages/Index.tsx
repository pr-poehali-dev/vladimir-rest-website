import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Place {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
  coordinates: { lat: number; lng: number };
}

const places: Place[] = [
  {
    id: 1,
    name: 'Золотые Ворота',
    category: 'Архитектура',
    description: 'Памятник древнерусской архитектуры XII века, символ города Владимира',
    image: 'https://cdn.poehali.dev/projects/00feff43-c02a-4976-bec1-86e4c56f84c4/files/6cc38f7c-9834-40e7-8020-63fd2ad14978.jpg',
    coordinates: { lat: 56.1292, lng: 40.3953 }
  },
  {
    id: 2,
    name: 'Успенский собор',
    category: 'Храмы',
    description: 'Величественный белокаменный собор, объект Всемирного наследия ЮНЕСКО',
    image: 'https://cdn.poehali.dev/projects/00feff43-c02a-4976-bec1-86e4c56f84c4/files/6cc38f7c-9834-40e7-8020-63fd2ad14978.jpg',
    coordinates: { lat: 56.1288, lng: 40.4076 }
  },
  {
    id: 3,
    name: 'Парк Пушкина',
    category: 'Парки',
    description: 'Уютный парк в центре города с живописными аллеями и зонами отдыха',
    image: 'https://cdn.poehali.dev/projects/00feff43-c02a-4976-bec1-86e4c56f84c4/files/f0398a89-621b-46b3-9cd8-26ca50628c2f.jpg',
    coordinates: { lat: 56.1265, lng: 40.4012 }
  },
  {
    id: 4,
    name: 'Дмитриевский собор',
    category: 'Храмы',
    description: 'Шедевр белокаменной резьбы XII века с уникальными барельефами',
    image: 'https://cdn.poehali.dev/projects/00feff43-c02a-4976-bec1-86e4c56f84c4/files/6cc38f7c-9834-40e7-8020-63fd2ad14978.jpg',
    coordinates: { lat: 56.1283, lng: 40.4089 }
  },
  {
    id: 5,
    name: 'Кафе "Старый город"',
    category: 'Рестораны',
    description: 'Атмосферное кафе с традиционной русской кухней и панорамным видом',
    image: 'https://cdn.poehali.dev/projects/00feff43-c02a-4976-bec1-86e4c56f84c4/files/47620ac2-2972-4e80-910d-8be59ac04422.jpg',
    coordinates: { lat: 56.1275, lng: 40.4050 }
  },
  {
    id: 6,
    name: 'Патриарший сад',
    category: 'Парки',
    description: 'Исторический сад с древними яблонями и смотровой площадкой',
    image: 'https://cdn.poehali.dev/projects/00feff43-c02a-4976-bec1-86e4c56f84c4/files/f0398a89-621b-46b3-9cd8-26ca50628c2f.jpg',
    coordinates: { lat: 56.1290, lng: 40.4065 }
  }
];

const categories = ['Все', 'Архитектура', 'Храмы', 'Парки', 'Рестораны'];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);

  const filteredPlaces = selectedCategory === 'Все' 
    ? places 
    : places.filter(place => place.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-muted/30 to-background">
      <div 
        className="relative h-[70vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://cdn.poehali.dev/projects/00feff43-c02a-4976-bec1-86e4c56f84c4/files/6cc38f7c-9834-40e7-8020-63fd2ad14978.jpg')`
        }}
      >
        <div className="text-center text-white z-10 px-4 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-4">
            Путешествуйте по Владимиру
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light">
            Откройте для себя незабываемые приключения и красивые места
          </p>
          <Button size="lg" className="text-lg px-8 py-6 hover:scale-105 transition-transform">
            Начать путешествие
            <Icon name="MapPin" className="ml-2" size={20} />
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="mb-8 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-center">
            Популярные места
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category)}
                className="transition-all hover:scale-105"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredPlaces.map((place, index) => (
            <Card 
              key={place.id} 
              className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedPlace(place)}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={place.image} 
                  alt={place.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <Badge className="absolute top-3 right-3 bg-primary/90">
                  {place.category}
                </Badge>
              </div>
              <CardContent className="p-5">
                <h3 className="font-display text-xl font-semibold mb-2">{place.name}</h3>
                <p className="text-muted-foreground line-clamp-2">{place.description}</p>
                <div className="flex items-center mt-4 text-sm text-muted-foreground">
                  <Icon name="MapPin" size={16} className="mr-1" />
                  <span>На карте</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-card rounded-2xl p-8 shadow-lg animate-fade-in">
          <h3 className="text-2xl font-display font-bold mb-6 flex items-center">
            <Icon name="Map" size={28} className="mr-3 text-primary" />
            Карта достопримечательностей
          </h3>
          <div className="bg-muted rounded-xl h-96 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10"></div>
            <div className="text-center z-10">
              <Icon name="MapPin" size={64} className="mx-auto mb-4 text-primary" />
              <p className="text-xl font-display mb-2">Интерактивная карта</p>
              <p className="text-muted-foreground">
                {filteredPlaces.length} {filteredPlaces.length === 1 ? 'место' : 'мест'} на карте
              </p>
            </div>
            {filteredPlaces.map((place) => (
              <div
                key={place.id}
                className="absolute w-8 h-8 bg-primary rounded-full border-4 border-white shadow-lg cursor-pointer hover:scale-125 transition-transform animate-pulse"
                style={{
                  left: `${((place.coordinates.lng - 40.38) / 0.05) * 100}%`,
                  top: `${(1 - (place.coordinates.lat - 56.12) / 0.015) * 100}%`
                }}
                onClick={() => setSelectedPlace(place)}
                title={place.name}
              />
            ))}
          </div>
          {selectedPlace && (
            <div className="mt-6 p-6 bg-accent/10 rounded-xl animate-scale-in">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className="text-xl font-display font-semibold">{selectedPlace.name}</h4>
                  <Badge className="mt-2">{selectedPlace.category}</Badge>
                </div>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => setSelectedPlace(null)}
                >
                  <Icon name="X" size={20} />
                </Button>
              </div>
              <p className="text-muted-foreground">{selectedPlace.description}</p>
            </div>
          )}
        </div>
      </div>

      <footer className="bg-secondary text-secondary-foreground py-12 mt-20">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-display font-bold mb-4">
            Откройте для себя Владимир
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Начните свое путешествие по древнему городу
          </p>
          <div className="flex justify-center gap-6 text-sm">
            <a href="#" className="hover:underline flex items-center">
              <Icon name="Phone" size={16} className="mr-2" />
              Контакты
            </a>
            <a href="#" className="hover:underline flex items-center">
              <Icon name="Mail" size={16} className="mr-2" />
              Написать нам
            </a>
            <a href="#" className="hover:underline flex items-center">
              <Icon name="Info" size={16} className="mr-2" />
              О проекте
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
