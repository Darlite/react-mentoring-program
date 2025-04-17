export default function formatRuntime(runtime: string) {
    const parsedRuntime = parseFloat(runtime);
    const hours = Math.floor(parsedRuntime / 60);
    const minutes = parsedRuntime % 60;

    return `${hours}h ${minutes}min`;
}
