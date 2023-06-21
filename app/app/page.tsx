import React from 'react';
import prisma from '@/lib/prisma'
import Cal from "./cal";
import Form from '../form';

export default async function IndexPage() {
  
  const events = await prisma.event.findMany();
  console.log(events);
  return (
    <>
    <div> 
      {/* {
      events.map(event => (
        <>

        <div> {event.eventName }</div>
        <div> {event.description }</div>
        <div> {event.date.toDateString()}</div>
        
        </>
      ))
      } */}
    </div>
    <div className='app'>
      <Cal/>
    <Form/>
    </div>
    
    </>
  );
}
