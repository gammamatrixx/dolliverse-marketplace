import React from 'react';
import { Carousel as ShadcnCarousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import useProductStore from '../lib/productState';

export const Carousel = () => {
  const { carouselImages } = useProductStore();

  return (
    <ShadcnCarousel className="w-full max-w-4xl mx-auto">
      <CarouselContent>
        {carouselImages.map((image, index) => (
          <CarouselItem key={index}>
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <img src={image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </ShadcnCarousel>
  );
};