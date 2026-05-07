# Why `any` is Called a Type Safety Hole and Why `unknown` is Safer ? Explanation of the concept of the type narrowing

---

## Introduction

In TypeScript, handling unpredictable data is a common challenge. Two special types often used for this purpose are `any` and `unknown`. Although both can store any kind of value, they behave very differently. Understanding the difference is important for writing safe and maintainable code.

This article explains why `any` is considered a "type safety hole" and why `unknown` is the safer alternative, and how **type narrowing** works in TypeScript.



---

## What is `any`?

The `any` type disables TypeScript’s type checking completely.

```ts
let value: any = "Hello";
value.toUpperCase();
value();
value.notExistingProperty;
```

TypeScript allows all of these operations, even if they may cause runtime errors.

## Why is `any` called a "type safety hole"?

Because it removes the protection TypeScript normally provides.

```ts
let age: any = 25;

age.toUpperCase(); // No TypeScript error
```

At runtime, this will crash because numbers do not have a `toUpperCase()` method.

Using `any` is similar to telling TypeScript:

> "Do not check this value."

As a result:

- Type checking is skipped
- Autocomplete becomes unreliable
- Runtime bugs increase
- Errors spread through the codebase

That is why developers call it a **type safety hole**.




---

## What is `unknown`?

The `unknown` type can also hold any value, but TypeScript does not allow unsafe operations directly.

```ts
let value: unknown = "Hello";

value.toUpperCase(); // Error
```

TypeScript forces you to verify the type first.



## Why is `unknown` safer?

Before using an `unknown` value, you must check its type.

```ts
let value: unknown = "Hello";

if (typeof value === "string") {
  console.log(value.toUpperCase());
}
```

Now the code is safe because TypeScript knows the value is a string inside the `if` block.

Advantages of `unknown`:

- Prevents accidental runtime errors
- Encourages proper validation
- Keeps TypeScript’s type safety active
- Makes code easier to maintain




---



## What is Type Narrowing?

Type narrowing means reducing a broad type into a more specific type using checks.

Example:

```ts
let value: unknown = "TypeScript";

if (typeof value === "string") {
  console.log(value.length);
}
```

Initially:

```ts
value: unknown
```

After the check:

```ts
typeof value === "string"
```

TypeScript narrows the type to:

```ts
value: string
```

Inside that block, string methods become available safely.



---

## Different Ways to Narrow Types

### 1. Using `typeof`

```ts
if (typeof value === "number") {
  console.log(value.toFixed(2));
}
```



### 2. Using `instanceof`

```ts
if (value instanceof Date) {
  console.log(value.getFullYear());
}
```



### 3. Using Custom Type Guards

```ts
function isString(value: unknown): value is string {
  return typeof value === "string";
}

if (isString(value)) {
  console.log(value.toUpperCase());
}
```




---

## `any` vs `unknown`

| Feature | `any` | `unknown` |
|---|---|---|
| Accepts any value | ✅ | ✅ |
| Type safety | ❌ | ✅ |
| Requires checking before use | ❌ | ✅ |
| Recommended for unpredictable data | ❌ | ✅ |



---

## Conclusion

The `any` type is called a type safety hole because it disables TypeScript’s protection system and allows unsafe operations. While it may seem convenient, it can lead to serious runtime bugs.

The `unknown` type is safer because it forces developers to validate data before using it. Combined with **type narrowing**, it helps create reliable and maintainable applications.

For modern TypeScript development, `unknown` should generally be preferred over `any` when dealing with uncertain data.
