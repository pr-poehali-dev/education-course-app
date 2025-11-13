import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const videoLessons = [
    { id: 1, title: 'Введение в основы', duration: '15:30', level: 'Начинающий', completed: true },
    { id: 2, title: 'Практическое применение', duration: '22:45', level: 'Средний', completed: false },
    { id: 3, title: 'Продвинутые техники', duration: '18:20', level: 'Продвинутый', completed: false },
  ];

  const blueprints = [
    { id: 1, title: 'Базовая схема А1', category: 'Основы', size: '2.5 MB' },
    { id: 2, title: 'Техническая спецификация Б3', category: 'Детали', size: '3.8 MB' },
    { id: 3, title: 'Сборочный чертеж', category: 'Сборка', size: '4.2 MB' },
  ];

  const documentation = [
    { id: 1, title: 'Руководство пользователя', pages: 45, updated: '15 окт 2024' },
    { id: 2, title: 'Техническая документация', pages: 120, updated: '10 ноя 2024' },
    { id: 3, title: 'Справочные материалы', pages: 78, updated: '05 ноя 2024' },
  ];

  const photos = [
    { id: 1, title: 'Процесс сборки', count: 24, date: '12 ноя 2024' },
    { id: 2, title: 'Готовые изделия', count: 18, date: '10 ноя 2024' },
    { id: 3, title: 'Рабочее пространство', count: 15, date: '08 ноя 2024' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <Icon name="GraduationCap" className="text-primary-foreground" size={24} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">Учебный Курс</h1>
                <p className="text-sm text-muted-foreground">Образовательная платформа</p>
              </div>
            </div>
            <Button variant="outline" size="sm">
              <Icon name="User" size={18} className="mr-2" />
              Профиль
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">Добро пожаловать в курс</h2>
          <p className="text-muted-foreground">Изучайте материалы в удобном формате</p>
        </div>

        <Tabs defaultValue="video" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="video" className="flex items-center gap-2">
              <Icon name="Video" size={18} />
              <span className="hidden sm:inline">Видео</span>
            </TabsTrigger>
            <TabsTrigger value="blueprints" className="flex items-center gap-2">
              <Icon name="FileText" size={18} />
              <span className="hidden sm:inline">Чертежи</span>
            </TabsTrigger>
            <TabsTrigger value="docs" className="flex items-center gap-2">
              <Icon name="BookOpen" size={18} />
              <span className="hidden sm:inline">Документация</span>
            </TabsTrigger>
            <TabsTrigger value="photos" className="flex items-center gap-2">
              <Icon name="Image" size={18} />
              <span className="hidden sm:inline">Фото</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="video" className="animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Video" size={24} />
                  Видеоуроки
                </CardTitle>
                <CardDescription>Пошаговые видеоинструкции для обучения</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {videoLessons.map((lesson) => (
                    <div
                      key={lesson.id}
                      className="flex items-center justify-between p-4 rounded-lg border border-border bg-card hover:bg-accent/10 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Icon name="Play" className="text-primary" size={28} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">{lesson.title}</h3>
                          <div className="flex items-center gap-3 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Icon name="Clock" size={14} />
                              {lesson.duration}
                            </span>
                            <Badge variant="secondary" className="text-xs">
                              {lesson.level}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      {lesson.completed && (
                        <Icon name="CheckCircle" className="text-primary" size={24} />
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="blueprints" className="animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="FileText" size={24} />
                  Технические чертежи
                </CardTitle>
                <CardDescription>Схемы и технические спецификации</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {blueprints.map((blueprint) => (
                    <div
                      key={blueprint.id}
                      className="p-4 rounded-lg border border-border bg-card hover:bg-accent/10 transition-all hover:scale-105 cursor-pointer"
                    >
                      <div className="aspect-[4/3] bg-muted rounded-lg mb-3 flex items-center justify-center">
                        <Icon name="FileSpreadsheet" className="text-muted-foreground" size={48} />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">{blueprint.title}</h3>
                      <div className="flex items-center justify-between text-sm">
                        <Badge variant="outline">{blueprint.category}</Badge>
                        <span className="text-muted-foreground">{blueprint.size}</span>
                      </div>
                      <Button variant="ghost" size="sm" className="w-full mt-3">
                        <Icon name="Download" size={16} className="mr-2" />
                        Скачать
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="docs" className="animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="BookOpen" size={24} />
                  Документация
                </CardTitle>
                <CardDescription>Текстовые материалы и справочники</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <div className="relative">
                    <Icon name="Search" className="absolute left-3 top-3 text-muted-foreground" size={20} />
                    <Input
                      type="text"
                      placeholder="Поиск в документации..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  {documentation.map((doc) => (
                    <div
                      key={doc.id}
                      className="flex items-center justify-between p-4 rounded-lg border border-border bg-card hover:bg-accent/10 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Icon name="FileText" className="text-primary" size={24} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">{doc.title}</h3>
                          <div className="flex items-center gap-3 text-sm text-muted-foreground">
                            <span>{doc.pages} страниц</span>
                            <span>•</span>
                            <span>Обновлено {doc.updated}</span>
                          </div>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Icon name="ExternalLink" size={18} />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="photos" className="animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Image" size={24} />
                  Фотогалерея
                </CardTitle>
                <CardDescription>Визуальные примеры и демонстрации</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {photos.map((album) => (
                    <div
                      key={album.id}
                      className="group relative rounded-lg overflow-hidden cursor-pointer"
                    >
                      <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center relative">
                        <Icon name="Image" className="text-primary" size={64} />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                          <Button variant="secondary" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                            <Icon name="Eye" size={16} className="mr-2" />
                            Просмотр
                          </Button>
                        </div>
                      </div>
                      <div className="p-4 bg-card border border-t-0 border-border">
                        <h3 className="font-semibold text-foreground mb-2">{album.title}</h3>
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Icon name="Images" size={14} />
                            {album.count} фото
                          </span>
                          <span>{album.date}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;
