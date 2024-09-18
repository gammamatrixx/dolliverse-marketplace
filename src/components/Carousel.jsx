import React from 'react';
import { Carousel as ShadcnCarousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import useProductStore from '../lib/productState';

export const Carousel = () => {
  const { carouselImages } = useProductStore();

  return (
    <div className="w-full">
      <ShadcnCarousel className="w-full">
        <CarouselContent>
          {carouselImages.map((image, index) => (
            <CarouselItem key={index}>
              <Card className="border-none">
                <CardContent className="flex aspect-[16/9] items-center justify-center p-0">
                  <img src={image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </ShadcnCarousel>
    </div>
  );
};
