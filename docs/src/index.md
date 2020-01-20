# SeisModels.jl

## What is SeisModels.jl?
A [Julia](http://julialang.org) package for dealing with models of the Earth's
(and other quasi-1D planets') seismic properties.  It allows you to
evaluate these properties at arbitrary positions within the model
and compute derived properties (such as pressure and gravity).

## How to install
SeisModels.jl can be added to your Julia environment like so:

```julia
julia> import Pkg; Pkg.add("SeisModels")
```

If all is working, you should be able to reproduce the figure below easily
(using [Plots.jl](https://github.com/JuliaPlots/Plots.jl)):

```@eval
using SeisModels
using Plots: plot, plot!, savefig
p = plot(legend=:left, framestyle=:box, grid=false, title="PREM", xlabel="Radius (km)", ylabel="Velocity (km/s) or density (g/cm^3)")
for (f,l) in zip((vp, vs, SeisModels.density), ("Vp", "Vs", "Density"))
    plot!(p, r->f(PREM, r), 0, 6371, label=l)
end
savefig(p, "PREM_example.svg")
```
![Plot of properties of the PREM model](PREM_example.svg)

## Contents

```@contents
```