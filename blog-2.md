# How Generics Help Build Reusable and Strictly Typed Code

---

## Introduction

In TypeScript, Generics allow developers to create reusable components, functions and classes that work with different data types while still preserving type safety. Instead of writing separate code for strings, numbers, objects and arrays, Generics allow one implementation to adapt dynamically to the provided type.

---




## What Are Generics?

Generics are placeholders for types.

```ts
function identity<T>(value: T): T {
  return value;
}
```

`T` represents a type that will be determined when the function is used.

---




## Why Not Use `any`?

Using `any` removes TypeScript’s protection.

```ts
function identity(value: any): any {
  return value;
}
```

This allows unsafe operations:

```ts
const result = identity(123);

result.toUpperCase(); // Runtime error
```

TypeScript cannot detect the mistake because `any` disables type checking.

---




## How Generics Preserve Type Safety

With Generics:

```ts
function identity<T>(value: T): T {
  return value;
}
```

TypeScript automatically infers the correct type.

```ts
const text = identity("Hello");
// string

const num = identity(123);
// number
```

The function stays reusable while remaining strictly typed.





---

## Generic Functions

### Example: Array Wrapper

```ts
function wrapInArray<T>(value: T): T[] {
  return [value];
}
```

Usage:

```ts
const names = wrapInArray("John");
// string[]

const numbers = wrapInArray(5);
// number[]
```

---




## Generic Interfaces

```ts
interface ApiResponse<T> {
  success: boolean;
  data: T;
}
```

Usage:

```ts
interface User {
  name: string;
  age: number;
}

const response: ApiResponse<User> = {
  success: true,
  data: {
    name: "John",
    age: 25
  }
};
```

---




## Generic React Components

```tsx
type ListProps<T> = {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
};

function List<T>({ items, renderItem }: ListProps<T>) {
  return (
    <div>
      {items.map(renderItem)}
    </div>
  );
}
```

Usage:

```tsx
<List
  items={["Apple", "Banana"]}
  renderItem={(item) => <p>{item}</p>}
/>
```
---




## Generic Constraints

Sometimes Generics should only accept certain types.

```ts
function printLength<T extends { length: number }>(value: T) {
  console.log(value.length);
}
```

Allowed:

```ts
printLength("Hello");
printLength([1, 2, 3]);
```

Not allowed:

```ts
printLength(123); // Error
```

---




## Benefits of Generics

- Reusable code
- Strong type safety
- Better autocomplete
- Easier maintenance
- Fewer runtime errors

---






## Conclusion

Generics are one of TypeScript’s most powerful features. They allow developers to build reusable functions and components while maintaining strict type safety.  Generics preserve type information and help catch errors during development, making applications more reliable and maintainable.
