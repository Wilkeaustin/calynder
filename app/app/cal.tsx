"use client"

import React from 'react';

import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

import { format } from 'date-fns';

export default function Cal() {
  const [selected, setSelected] = React.useState<Date>();

  
  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = <p>You picked {format(selected, 'PP')}.</p>;
  }
  return (
    <>
    <DayPicker
      mode="single"
      selected={selected}
      onSelect={setSelected}
      footer={footer}
    />
    </>
  );
}
