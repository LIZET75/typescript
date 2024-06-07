import React from "react";
export function customTag(strings: TemplateStringsArray, ...values: any[]): string {
    // Process the template parts and values as needed
    return `Processed: ${strings[0]}${values[0]}${strings[1]}`;
  }
  
  export function apples() {
    return <div> {result}   </div>
  }
  const item: string = 'apple';
  const price: number = 1.5;
  const result: string = customTag`The ${item} costs $${price}.`;
  
  console.log(result);
  export default apples;

  //Processed:The apple costs $