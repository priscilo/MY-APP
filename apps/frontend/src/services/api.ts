export async function fetchHello() {
    const res = await fetch('http://localhost:3000/api/hello');
    return res.json();
}