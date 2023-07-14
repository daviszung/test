Bun.serve({
  port: 3000,
  fetch(req) {
    console.log(req.url);
    if (req.url === "http://localhost:3000/dist/output.css") {
      return new Response(Bun.file("dist/output.css"));
    } else if (req.url === "http://localhost:3000/dist/main.js") {
      return new Response(Bun.file("src/main.ts"))
    }
    return new Response(Bun.file("src/index.html"));
  },
});

console.log("serving on port 3000\n");
