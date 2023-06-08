import React from 'react';
import prisma from '@/lib/prisma'
import Cal from "./cal";

export default async function IndexPage() {
  
  const events = await prisma.event.findMany();
  console.log(events);
  return (
    <>
    <div> 
      {
      events.map(event => (
        <>

        <div> {event.eventName }</div>
        <div> {event.description }</div>
        <div> {event.date.toDateString()}</div>
        
        </>
      ))
      }
    </div>
    <Cal/>
    </>
  );
}
