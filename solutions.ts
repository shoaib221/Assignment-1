

// Solution 1

function filterEvenNumbers(numbers: number[]): number[] {
    return numbers.filter(n => n % 2 === 0);
}


// Solution 2

function reverseString(s: string): string {
    return s.split('').reverse().join('');
}


// Solution 3

type StringOrNumber = string | number;

function checkType(value: StringOrNumber): string {
    if (typeof value === 'string') {
        return "String";
    } else {
        return "Number";
    }
}


// Solution 4

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}


// Solution 5

interface Book {
    title: string;
    author: string;
    publishedYear: number;
}

function toggleReadStatus(book: Book) : Book & { isRead: boolean } {
    // Implementation for toggling read status
    return { ...book, isRead: true };
}


// Solution 6

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    grade: string;

    constructor(name: string, age: number, grade: string) {
        super(name, age);
        this.grade = grade;
    }

    getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    }

}

// Solution 7

function getIntersection(array1: number[], array2: number[]): number[] {
    const set = new Set(array1);
    return array2.filter(item => set.has(item));
}



