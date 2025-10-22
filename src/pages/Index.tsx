import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface Place {
  id: number;
  name: string;
  category: string;
  description: string;
  address: string;
  image: string;
  coordinates: [number, number];
}

const places: Place[] = [
  {
    id: 1,
    name: 'Успенский собор',
    category: 'Архитектура',
    description: 'Белокаменный шедевр XII века, включенный в список Всемирного наследия ЮНЕСКО',
    address: 'Большая Московская ул., 56',
    image: 'https://cdn.poehali.dev/projects/00feff43-c02a-4976-bec1-86e4c56f84c4/files/176c75e1-c305-444b-a399-832e9f27edc1.jpg',
    coordinates: [56.1289, 40.4078]
  },
  {
    id: 2,
    name: 'Парк Пушкина',
    category: 'Парки',
    description: 'Живописный парк с прогулочными аллеями, идеальное место для отдыха с семьей',
    address: 'ул. Большая Московская, 17',
    image: 'https://cdn.poehali.dev/projects/00feff43-c02a-4976-bec1-86e4c56f84c4/files/c3465b83-8472-47fa-813c-edd7c7f1114d.jpg',
    coordinates: [56.1265, 40.4102]
  },
  {
    id: 3,
    name: 'Исторический музей',
    category: 'Музеи',
    description: 'Богатая коллекция артефактов, рассказывающих историю Владимирской земли',
    address: 'Большая Московская ул., 64',
    image: 'https://cdn.poehali.dev/projects/00feff43-c02a-4976-bec1-86e4c56f84c4/files/71dc2b53-17de-49da-a44b-9a6d5d66c2fe.jpg',
    coordinates: [56.1295, 40.4089]
  },
  {
    id: 4,
    name: 'Золотые ворота',
    category: 'Архитектура',
    description: 'Памятник древнерусской архитектуры, символ города Владимира',
    address: 'Дворянская ул., 1А',
    image: 'https://cdn.poehali.dev/projects/00feff43-c02a-4976-bec1-86e4c56f84c4/files/176c75e1-c305-444b-a399-832e9f27edc1.jpg',
    coordinates: [56.1297, 40.4154]
  },
  {
    id: 5,
    name: 'Дмитриевский собор',
    category: 'Архитектура',
    description: 'Уникальная белокаменная резьба XII века, объект ЮНЕСКО',
    address: 'Большая Московская ул., 60',
    image: 'https://cdn.poehali.dev/projects/00feff43-c02a-4976-bec1-86e4c56f84c4/files/176c75e1-c305-444b-a399-832e9f27edc1.jpg',
    coordinates: [56.1293, 40.4085]
  },
  {
    id: 6,
    name: 'Патриарший сад',
    category: 'Парки',
    description: 'Восстановленный сад с фруктовыми деревьями и ягодниками',
    address: 'ул. Козлов вал',
    image: 'https://cdn.poehali.dev/projects/00feff43-c02a-4976-bec1-86e4c56f84c4/files/c3465b83-8472-47fa-813c-edd7c7f1114d.jpg',
    coordinates: [56.1280, 40.4095]
  }
];

const categories = ['Все', 'Архитектура', 'Парки', 'Музеи'];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);

  const filteredPlaces = selectedCategory === 'Все' 
    ? places 
    : places.filter(place => place.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground py-6 px-4 shadow-lg">
        <div className="container mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <Icon name="MapPin" size={32} />
            <h1 className="text-4xl font-display font-bold">Владимир</h1>
          </div>
          <p className="text-lg opacity-90">Откройте для себя лучшие места для отдыха</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-display font-semibold mb-4 text-foreground">Категории</h2>
          <div className="flex flex-wrap gap-3">
            {categories.map(category => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? 'default' : 'outline'}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredPlaces.map(place => (
            <Card 
              key={place.id} 
              className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => setSelectedPlace(place)}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={place.image} 
                  alt={place.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-display font-semibold text-foreground">{place.name}</h3>
                  <span className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded-full">
                    {place.category}
                  </span>
                </div>
                <p className="text-muted-foreground mb-3">{place.description}</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon name="MapPin" size={16} />
                  <span>{place.address}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-card rounded-lg shadow-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <Icon name="Map" size={28} className="text-primary" />
            <h2 className="text-2xl font-display font-semibold text-card-foreground">Карта мест</h2>
          </div>
          
          <div className="bg-muted rounded-lg p-8 text-center">
            <div className="mb-4">
              <Icon name="MapPin" size={64} className="mx-auto text-primary opacity-50" />
            </div>
            <p className="text-muted-foreground mb-2">
              Интерактивная карта с отметками всех мест для отдыха
            </p>
            <p className="text-sm text-muted-foreground">
              Координаты: Владимир (56.1289° N, 40.4078° E)
            </p>
          </div>
        </div>
      </main>

      {selectedPlace && (
        <div 
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedPlace(null)}
        >
          <Card className="max-w-2xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="h-64 overflow-hidden">
              <img 
                src={selectedPlace.image} 
                alt={selectedPlace.name}
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-display font-bold text-foreground mb-2">
                    {selectedPlace.name}
                  </h3>
                  <span className="text-sm bg-accent text-accent-foreground px-3 py-1 rounded-full">
                    {selectedPlace.category}
                  </span>
                </div>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => setSelectedPlace(null)}
                >
                  <Icon name="X" size={24} />
                </Button>
              </div>
              <p className="text-muted-foreground mb-4">{selectedPlace.description}</p>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Icon name="MapPin" size={20} />
                <span>{selectedPlace.address}</span>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      <footer className="bg-card mt-12 py-8 px-4 border-t">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2024 Владимир Туризм. Откройте красоту древнего города</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
