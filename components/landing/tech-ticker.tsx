export function TechTicker() {
  const items = [
    "PYTHON",
    "JAVASCRIPT",
    "TYPESCRIPT",
    "FASTAPI",
    "REACTJS",
    "NEXTJS",
    "POSTGRESQL",
    "MONGODB",
    "REDIS",
    "DOCKER",
    "GIT",
    "CI/CD",
    "REST_APIs",
    "SQL",
    "LINUX",
    "AWS",
  ]

  return (
    <div className="overflow-hidden border-b border-border bg-card py-4">
      <div className="animate-ticker flex whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="mx-6 font-mono text-xs tracking-widest text-muted-foreground">
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
