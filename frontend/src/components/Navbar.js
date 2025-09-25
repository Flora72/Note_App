const Navbar = () => {
  return (
    <header className="bg-base-300 border0b border-base-content/10">
        <div className="mx-auto max-w-6xl p-4">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold text-primary font-mono tracking-tighter">
                    Mariposa Notes
                </h1>
                <div className="flex items-center gap-4">
                <link to={"/create"} className="btn btn-primary"></link>

                </div>
            </div>
        </div>
        </header>
  )
}

export default Navbar
