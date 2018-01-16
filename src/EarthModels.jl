__precompile__()

module EarthModels

import Base: eta

import QuadGK: quadgk

export
    # Model types
    EarthModel,
    EarthModel1D,
    LinearLayeredModel,
    PREMPolyModel,
    SteppedLayeredModel,

    # Model properties
    depth,
    radius,
    surface_radius,

    # Evaluation functions
    vp,
    vs,
    rho,
    vph,
    vpv,
    vsh,
    vsv,
    eta,
    Qμ, Qmu,
    Qκ, Qkappa,

    # Derived properties
    bulk_modulus,
    gravity,
    mass,
    pressure,
    shear_modulus,
    surface_mass,

    # Models
    AK135,
    PREM

# Type of which all others are subtypes
abstract type EarthModel end

## Basic properties of models
include("basic_properties.jl")

## 1D models
include("earth_models_1d.jl")
# Predefined 1D models
include("prem.jl")
include("ak135.jl")

end # module
