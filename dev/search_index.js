var documenterSearchIndex = {"docs":
[{"location":"references/#References-1","page":"References","title":"References","text":"","category":"section"},{"location":"references/#","page":"References","title":"References","text":"Dziewoński, A., Anderson, D., 1981. Preliminary reference Earth model. Phys. Earth Planet. Inter. 25, 297–356. doi:10.1016/0031-9201(81)90046-7\nKennett  B.L.N.  Engdahl  E.  1991. Traveltimes for global earthquake location and phase identification. Geophys J Int 105  429–465. doi:10.1111/j.1365-246X.1991.tb06724.x\nKennett, B.L.N., Engdahl, E., Buland, R., 1995. Constraints on seismic velocities in the Earth from travel-times. Geophys J Int 122, 108–124. doi:10.1111/j.1365-246X.1995.tb03540.x\nWeber, R.C.,, Lin, P.-Y.,, Garnero, E.J., Williams, Q., Lognonné, P., 2011. Seismic Detection of the Lunar Core. Science, 331, 309–312.doi:10.1126/science.1199375","category":"page"},{"location":"examples/#Examples-1","page":"Examples","title":"Examples","text":"","category":"section"},{"location":"examples/#Preamble-1","page":"Examples","title":"Preamble","text":"","category":"section"},{"location":"examples/#","page":"Examples","title":"Examples","text":"These commands all assume that you have done","category":"page"},{"location":"examples/#","page":"Examples","title":"Examples","text":"using SeisModels","category":"page"},{"location":"examples/#","page":"Examples","title":"Examples","text":"first.","category":"page"},{"location":"examples/#Basic-properties-1","page":"Examples","title":"Basic properties","text":"","category":"section"},{"location":"examples/#","page":"Examples","title":"Examples","text":"To compute the P-wave velocity at the base of the Earth’s mantle (2750 km depth) in the iasp91, ak135 and PREM models, and compare them all to PREM, you could do","category":"page"},{"location":"examples/#","page":"Examples","title":"Examples","text":"vels = vp.((IASP91, AK135, PREM), 2750, depth=true)\n100 .* (vels .- vels[end]) ./ vels[end]","category":"page"},{"location":"examples/#","page":"Examples","title":"Examples","text":"(So they all agree to less than a quarter of a percent!)","category":"page"},{"location":"examples/#","page":"Examples","title":"Examples","text":"To retrieve a density profile across the inner core boundary in PREM:","category":"page"},{"location":"examples/#","page":"Examples","title":"Examples","text":"r = 1200:10:1250;\ndensity.(PREM, r)","category":"page"},{"location":"examples/#","page":"Examples","title":"Examples","text":"To get the planetary radius in km of the moon used in Weber et al.’s (2011) model:","category":"page"},{"location":"examples/#","page":"Examples","title":"Examples","text":"surface_radius(MOON_WEBER_2011)","category":"page"},{"location":"examples/#","page":"Examples","title":"Examples","text":"The shear modulus in the transition zone:","category":"page"},{"location":"examples/#","page":"Examples","title":"Examples","text":"shear_modulus(AK135, 600, depth=true)","category":"page"},{"location":"examples/#Derived-properties-1","page":"Examples","title":"Derived properties","text":"","category":"section"},{"location":"examples/#","page":"Examples","title":"Examples","text":"If a model includes density, then things like gravity, moment of inertia, and so on, can be easily calculated.","category":"page"},{"location":"examples/#","page":"Examples","title":"Examples","text":"PREM used as constraining data a couple of gross Earth values: the mass should be 5974times10^24kg, and the ratio IMR^2 should be 0.3308.  Let’s check how Dziewoński and Anderson did:","category":"page"},{"location":"examples/#","page":"Examples","title":"Examples","text":"≈(mass(PREM, 0, depth=true), 5.974e24, atol=0.001e24)\n≈(moment_of_inertia(PREM)/(mass(PREM, 0, depth=true)*(1e3*surface_radius(PREM))^2), 0.3308, atol=0.0001)","category":"page"},{"location":"examples/#","page":"Examples","title":"Examples","text":"To calculate a lookup table of pressure in ak135 for use with another program, you could do:","category":"page"},{"location":"examples/#","page":"Examples","title":"Examples","text":"using DelimitedFiles: writedlm\nr = 0:10:6371\np = pressure.(AK135, r)\nwritedlm(\"lookup_table.txt\", [r p])","category":"page"},{"location":"inbuilt_models/#Inbuilt-models-1","page":"Inbuilt models","title":"Inbuilt models","text":"","category":"section"},{"location":"inbuilt_models/#","page":"Inbuilt models","title":"Inbuilt models","text":"Most users of SeisModels will probably want to simply calculate properties for one of the inbuilt models of the Earth and moon. They are:","category":"page"},{"location":"inbuilt_models/#","page":"Inbuilt models","title":"Inbuilt models","text":"AK135\nIASP91\nPREM\nMOON_WEBER_2011","category":"page"},{"location":"inbuilt_models/#SeisModels.Earth.AK135","page":"Inbuilt models","title":"SeisModels.Earth.AK135","text":"AK135\n\n1-D layered model of the Earth, containing density.\n\nReference\n\nKennett, B.L.N., Engdahl, E., Buland, R., 1995. Constraints on seismic velocities in the Earth from travel-times. Geophys J Int 122, 108–124. https://doi.org/10.1111/j.1365-246X.1995.tb03540.x\n\n\n\n\n\n","category":"constant"},{"location":"inbuilt_models/#SeisModels.Earth.IASP91","page":"Inbuilt models","title":"SeisModels.Earth.IASP91","text":"IASP91\n\n1-D model of velocity.\n\nN.B. iasp91 does not contain density.\n\nThis version of the model uses the original coefficients and is a PREMPolyModel  as published.  Other implementations available may use a layered piecewise linear model and/or add density from other sources.\n\nReference\n\nKennett  B.L.N.  Engdahl  E.  1991. Traveltimes for global earthquake location and phase identification. Geophys J Int 105  429–465. https://doi.org/10.1111/j.1365-246X.1991.tb06724.x\n\n\n\n\n\n","category":"constant"},{"location":"inbuilt_models/#SeisModels.Earth.PREM","page":"Inbuilt models","title":"SeisModels.Earth.PREM","text":"PREM\n\n1-D model containing density, radial anisotropy and attenuation.\n\nReference\n\nDziewoński, A., Anderson, D., 1981. Preliminary reference Earth model. Phys. Earth Planet. Inter. 25, 297–356. https://doi.org/10.1016/0031-9201(81)90046-7\n\n\n\n\n\n","category":"constant"},{"location":"inbuilt_models/#SeisModels.Moon.MOON_WEBER_2011","page":"Inbuilt models","title":"SeisModels.Moon.MOON_WEBER_2011","text":"MOON_WEBER_2011\n\n1-D layered model of the Moon, containing density.\n\nReference\n\nWeber, R.C.,, Lin, P.-Y.,, Garnero, E.J., Williams, Q., Lognonné, P., 2011. Seismic Detection of the Lunar Core. Science, 331, 309–312. https://doi.org/10.1126/science.1199375\n\n\n\n\n\n","category":"constant"},{"location":"function_index/#Index-of-functions-1","page":"Function index","title":"Index of functions","text":"","category":"section"},{"location":"function_index/#Basic-physical-properties-1","page":"Function index","title":"Basic physical properties","text":"","category":"section"},{"location":"function_index/#","page":"Function index","title":"Function index","text":"evaluate\nvp\nvs\ndensity\nvph\nvpv\nvsh\nvsv\neta\nQμ\nQmu\nQκ\nQkappa","category":"page"},{"location":"function_index/#SeisModels.evaluate","page":"Function index","title":"SeisModels.evaluate","text":"evaluate(m::SeisModel1D, field::Symbol, r; depth=false) -> vals\n\nEvaluate the model m at radius r km for the different property/ies in field, returning a scalar for scalar input, and an array for array input.\n\nIf depth is true, r is treated as a depth in km instead.\n\n\n\n\n\n","category":"function"},{"location":"function_index/#SeisModels.vp","page":"Function index","title":"SeisModels.vp","text":"vp(m::SeisModel1D, r; depth=false, freq=reffrequency(m)) -> isotropic average Vp\n\nReturn the value of isotropic average Vp (km/s) for model m at radius r km.\n\nIf depth is true, then r is given as a depth in km instead.\n\nIf freq is given, then the velocity is corrected for attenuation. This requires the model has attenuation and a reference frequency.\n\n\n\n\n\n","category":"function"},{"location":"function_index/#SeisModels.vs","page":"Function index","title":"SeisModels.vs","text":"vs(m::SeisModel1D, r; depth=false, freq=reffrequency(m)) -> isotropic average Vs\n\nReturn the value of isotropic average Vs (km/s) for model m at radius r km.\n\nIf depth is true, then r is given as a depth in km instead.\n\nIf freq is given, then the velocity is corrected for attenuation. This requires the model has attenuation and a reference frequency.\n\n\n\n\n\n","category":"function"},{"location":"function_index/#SeisModels.density","page":"Function index","title":"SeisModels.density","text":"density(m::SeisModel1D, r; depth=false) -> density\n\nReturn the value of density (g/cm^3) for model m at radius r km.\n\nIf depth is true, then r is given as a depth in km instead.\n\n\n\n\n\n","category":"function"},{"location":"function_index/#SeisModels.vph","page":"Function index","title":"SeisModels.vph","text":"vph(m::SeisModel1D, r; depth=false, freq=reffrequency(m)) -> Vph\n\nReturn the value of Vph (km/s) for model m at radius r km.\n\nIf depth is true, then r is given as a depth in km instead.\n\nIf freq is given, then the velocity is corrected for attenuation. This requires the model has attenuation and a reference frequency.\n\n\n\n\n\n","category":"function"},{"location":"function_index/#SeisModels.vpv","page":"Function index","title":"SeisModels.vpv","text":"vpv(m::SeisModel1D, r; depth=false, freq=reffrequency(m)) -> Vpv\n\nReturn the value of Vpv (km/s) for model m at radius r km.\n\nIf depth is true, then r is given as a depth in km instead.\n\nIf freq is given, then the velocity is corrected for attenuation. This requires the model has attenuation and a reference frequency.\n\n\n\n\n\n","category":"function"},{"location":"function_index/#SeisModels.vsh","page":"Function index","title":"SeisModels.vsh","text":"vsh(m::SeisModel1D, r; depth=false, freq=reffrequency(m)) -> Vsh\n\nReturn the value of Vsh (km/s) for model m at radius r km.\n\nIf depth is true, then r is given as a depth in km instead.\n\nIf freq is given, then the velocity is corrected for attenuation. This requires the model has attenuation and a reference frequency.\n\n\n\n\n\n","category":"function"},{"location":"function_index/#SeisModels.vsv","page":"Function index","title":"SeisModels.vsv","text":"vsv(m::SeisModel1D, r; depth=false, freq=reffrequency(m)) -> Vsv\n\nReturn the value of Vsv (km/s) for model m at radius r km.\n\nIf depth is true, then r is given as a depth in km instead.\n\nIf freq is given, then the velocity is corrected for attenuation. This requires the model has attenuation and a reference frequency.\n\n\n\n\n\n","category":"function"},{"location":"function_index/#SeisModels.eta","page":"Function index","title":"SeisModels.eta","text":"eta(m::SeisModel1D, r; depth=false) -> η\n\nReturn the value of η for model m at radius r km.\n\nIf depth is true, then r is given as a depth in km instead.\n\n\n\n\n\n","category":"function"},{"location":"function_index/#SeisModels.Qμ","page":"Function index","title":"SeisModels.Qμ","text":"Qμ(m::SeisModel1D, r; depth=false) -> Qμ\n\nReturn the value of Qμ for model m at radius r km.\n\nIf depth is true, then r is given as a depth in km instead.\n\n\n\n\n\n","category":"function"},{"location":"function_index/#SeisModels.Qmu","page":"Function index","title":"SeisModels.Qmu","text":"Qμ(m::SeisModel1D, r; depth=false) -> Qμ\n\nReturn the value of Qμ for model m at radius r km.\n\nIf depth is true, then r is given as a depth in km instead.\n\n\n\n\n\n","category":"function"},{"location":"function_index/#SeisModels.Qκ","page":"Function index","title":"SeisModels.Qκ","text":"Qκ(m::SeisModel1D, r; depth=false) -> Qκ\n\nReturn the value of Qκ for model m at radius r km.\n\nIf depth is true, then r is given as a depth in km instead.\n\n\n\n\n\n","category":"function"},{"location":"function_index/#SeisModels.Qkappa","page":"Function index","title":"SeisModels.Qkappa","text":"Qκ(m::SeisModel1D, r; depth=false) -> Qκ\n\nReturn the value of Qκ for model m at radius r km.\n\nIf depth is true, then r is given as a depth in km instead.\n\n\n\n\n\n","category":"function"},{"location":"function_index/#Model-enquiry-1","page":"Function index","title":"Model enquiry","text":"","category":"section"},{"location":"function_index/#","page":"Function index","title":"Function index","text":"depth\nhasattenuation\nhasdensity\nhasreffrequency\nisanisotropic\nradius\nreffrequency\nsurface_radius","category":"page"},{"location":"function_index/#SeisModels.depth","page":"Function index","title":"SeisModels.depth","text":"depth(m, radius) -> depth\n\nReturn the depth in km for the model m given a radius in km.\n\n\n\n\n\n","category":"function"},{"location":"function_index/#SeisModels.hasattenuation","page":"Function index","title":"SeisModels.hasattenuation","text":"hasattenuation(m) -> ::Bool\n\nReturn true if the model m includes attenuation and false otherwise.\n\n\n\n\n\n","category":"function"},{"location":"function_index/#SeisModels.hasdensity","page":"Function index","title":"SeisModels.hasdensity","text":"hasdensity(m) -> ::Bool\n\nReturn true if density is defined for model m, and false otherwise.\n\n\n\n\n\n","category":"function"},{"location":"function_index/#SeisModels.hasreffrequency","page":"Function index","title":"SeisModels.hasreffrequency","text":"hasreffrequency(m::PREMPolyModel) -> ::Bool\n\nReturn true if a reference frequency is defined for PREMPolyModel m, and false otherwise.\n\n\n\n\n\n","category":"function"},{"location":"function_index/#SeisModels.isanisotropic","page":"Function index","title":"SeisModels.isanisotropic","text":"isanisotropic(m) -> ::Bool\n\nReturn true if the model m is anisotropic and false otherwise.\n\n\n\n\n\n","category":"function"},{"location":"function_index/#SeisModels.radius","page":"Function index","title":"SeisModels.radius","text":"radius(m, depth) -> radius\n\nReturn the radius in km for the model m given a depth in km.\n\n\n\n\n\n","category":"function"},{"location":"function_index/#SeisModels.reffrequency","page":"Function index","title":"SeisModels.reffrequency","text":"reffrequency(m::PREMPolyModel) = f\n\nReturn the reference frequency for a PREMPolyModel m in Hz.\n\n\n\n\n\n","category":"function"},{"location":"function_index/#SeisModels.surface_radius","page":"Function index","title":"SeisModels.surface_radius","text":"surface_radius(m) -> radius\n\nReturn the surface radius in km of the SeisModel m.\n\n\n\n\n\n","category":"function"},{"location":"function_index/#Derived-model-properties-1","page":"Function index","title":"Derived model properties","text":"","category":"section"},{"location":"function_index/#","page":"Function index","title":"Function index","text":"bulk_modulus\ngravity\nmass\nmoment_of_inertia\npoissons_ratio\npressure\nshear_modulus\nsurface_mass\nyoungs_modulus","category":"page"},{"location":"function_index/#SeisModels.bulk_modulus","page":"Function index","title":"SeisModels.bulk_modulus","text":"bulk_modulus(m::SeisModel1D, r; depth=false) -> K\n\nReturn the bulk modulus K in GPa at radius r km in the model m.\n\nIf depth is true, r is treated as a depth in km instead.\n\n\n\n\n\n","category":"function"},{"location":"function_index/#SeisModels.gravity","page":"Function index","title":"SeisModels.gravity","text":"gravity(m::SeisModel1D, r) -> g\n\nReturn the acceleration due to gravity, g, in m/s^2 at radius r km.\n\n\n\n\n\n","category":"function"},{"location":"function_index/#SeisModels.mass","page":"Function index","title":"SeisModels.mass","text":"mass(m::SeisModel1D, r; depth=false) -> mass\n\nReturn the mass in kg between the centre of the model and the radius r km.\n\nIf depth is true, r is treated as a depth in km instead.\n\n\n\n\n\n","category":"function"},{"location":"function_index/#SeisModels.moment_of_inertia","page":"Function index","title":"SeisModels.moment_of_inertia","text":"moment_of_inertia(m, r0=0, r1=surface_radius(m)) -> I\n\nReturn the moment of interia I in kg m² for the model m between radii r0 and r1 in km.\n\n\n\n\n\n","category":"function"},{"location":"function_index/#SeisModels.poissons_ratio","page":"Function index","title":"SeisModels.poissons_ratio","text":"poissons_ratio(m, r; depth=false) -> ν\n\nReturn the Poisson's ratio for the model m given a radius r in km. The calculation uses the isotropic average velocities at r.\n\nIf depth is true, r is treated as a depth in km instead.\n\n\n\n\n\n","category":"function"},{"location":"function_index/#SeisModels.pressure","page":"Function index","title":"SeisModels.pressure","text":"pressure(m::SeisModel1D, r; depth=false) -> p\n\nReturn the pressure p in Pa at radius r km.\n\nIf depth is true, r is treated as a depth in km instead.\n\n\n\n\n\n","category":"function"},{"location":"function_index/#SeisModels.shear_modulus","page":"Function index","title":"SeisModels.shear_modulus","text":"shear_modulus(m::SeisModel1D, r; depth=false) -> μ\n\nReturn the shear modulus μ (often also called G) in GPa at radius r in the model m.\n\nIf depth is true, r is treated as a depth in km instead.\n\n\n\n\n\n","category":"function"},{"location":"function_index/#SeisModels.surface_mass","page":"Function index","title":"SeisModels.surface_mass","text":"surface_mass(m::SeisModel1D, r; depth=false) -> mass\n\nReturn the mass in kg betwen radius r km and the surface.\n\nIf depth is true, r is treated as a depth in km instead.\n\n\n\n\n\n","category":"function"},{"location":"function_index/#SeisModels.youngs_modulus","page":"Function index","title":"SeisModels.youngs_modulus","text":"youngs_modulus(m, r; depth=false) -> E\n\nReturn the Young's modulus E in GPa for the model m given a radius r in km.\n\nIf depth is true, r is treated as a depth in km instead.\n\n\n\n\n\n","category":"function"},{"location":"function_index/#Input/output-1","page":"Function index","title":"Input/output","text":"","category":"section"},{"location":"function_index/#","page":"Function index","title":"Function index","text":"read_mineos\nwrite_mineos","category":"page"},{"location":"function_index/#SeisModels.read_mineos","page":"Function index","title":"SeisModels.read_mineos","text":"read_mineos(file) -> m::LinearLayeredModel\n\nRead a 1D seismic model from a Mineos tabular format file.\n\nReferences:\n\nhttps://geodynamics.org/cig/software/mineos/mineos-manual.pdf\n\n\n\n\n\n","category":"function"},{"location":"function_index/#SeisModels.write_mineos","page":"Function index","title":"SeisModels.write_mineos","text":"write_mineos(m::LinearLayeredModel, file, freq=1.0, title=\"Model from SeisModels.jl\")\n\nSave a SeisModel1D as a Mineos 'tabular' format file.  Supply the reference frequency freq in Hz (which defaults to 1 Hz) and a title.\n\nNote that Mineos has two types of model file; one parameterised by radial knots with values interpolated linearly between them ('tabular' format), and one with PREM-style polynomials ('polynomial' format). Mineos uses the tabular format internally even if a polynomial file is read in, and testing suggests that polynomial files are not used correctly by the CIG version of Mineos, so it is not recommended to use them at all.  Consequently, SeisModels does not support writing polynomial format files.\n\nReference\n\nMineos manual, https://geodynamics.org/cig/software/mineos/mineos-manual.pdf\n\n\n\n\n\n","category":"function"},{"location":"#SeisModels.jl-1","page":"Home","title":"SeisModels.jl","text":"","category":"section"},{"location":"#What-is-SeisModels.jl?-1","page":"Home","title":"What is SeisModels.jl?","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"A Julia package for dealing with models of the Earth's (and other quasi-1D planets') seismic properties.  It allows you to evaluate these properties at arbitrary positions within the model and compute derived properties (such as pressure and gravity).","category":"page"},{"location":"#How-to-install-1","page":"Home","title":"How to install","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"SeisModels.jl can be added to your Julia environment like so:","category":"page"},{"location":"#","page":"Home","title":"Home","text":"julia> import Pkg; pkg\"add https://github.com/anowacki/SeisModels.jl\"","category":"page"},{"location":"#","page":"Home","title":"Home","text":"If all is working, you should be able to reproduce the figure below easily:","category":"page"},{"location":"#","page":"Home","title":"Home","text":"using SeisModels, Plots\np = plot(legend=:left, framestyle=:box, grid=false, title=\"PREM\", xlabel=\"Radius (km)\", ylabel=\"Velocity (km/s) or density (g/cm^3)\")\nfor (f,l) in zip((vp, vs, SeisModels.density), (\"Vp\", \"Vs\", \"Density\"))\n    plot!(p, r->f(PREM, r), 0, 6371, label=l)\nend\nsavefig(p, \"PREM_example.svg\")","category":"page"},{"location":"#","page":"Home","title":"Home","text":"(Image: Plot of properties of the PREM model)","category":"page"},{"location":"#Contents-1","page":"Home","title":"Contents","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"","category":"page"},{"location":"io/#Model-input/output-1","page":"Model input-output","title":"Model input/output","text":"","category":"section"},{"location":"io/#","page":"Model input-output","title":"Model input-output","text":"SeisModels contains the ability to read and write Mineos files in tabular format. These by definition are LinearLayeredModels.","category":"page"},{"location":"io/#","page":"Model input-output","title":"Model input-output","text":"Use the commands read_mineos and write_mineos to respectively load and save LinearLayeredModels in this format.","category":"page"},{"location":"io/#","page":"Model input-output","title":"Model input-output","text":"PREMPolyModels can be converted easily to LinearLayeredModels: see the section on conversion for details.","category":"page"},{"location":"types/#Model-types-1","page":"Model types","title":"Model types","text":"","category":"section"},{"location":"types/#Type-hierarchy-1","page":"Model types","title":"Type hierarchy","text":"","category":"section"},{"location":"types/#","page":"Model types","title":"Model types","text":"The module defines the SeisModel type and subtypes of this specify the kind of model (i.e., symmetry, nature of basis function, etc.).","category":"page"},{"location":"types/#","page":"Model types","title":"Model types","text":"The current type hierarchy is as follows:","category":"page"},{"location":"types/#","page":"Model types","title":"Model types","text":"SeisModel: Abstract type of all seismic models\nSeisModel1D: Abstract type of all one-dimensonal (radially-symmetric) seismic models\nSteppedLayeredModel: Type defined by layers with contstat properties.\nLinearLayeredModel: Type defined by layers with constant gradient.\nPREMPolyModel: Type defined by polynomials.","category":"page"},{"location":"types/#","page":"Model types","title":"Model types","text":"As you can see, there are currently three types of models implemented, all 1D models, with polynomial, linear or constant basis within each layer.","category":"page"},{"location":"types/#SteppedLayeredModel-1","page":"Model types","title":"SteppedLayeredModel","text":"","category":"section"},{"location":"types/#","page":"Model types","title":"Model types","text":"A SteppedLayeredModel is composed of a series of layers with constant properties in each layer.  The radii define the top of each layer.","category":"page"},{"location":"types/#","page":"Model types","title":"Model types","text":"An example of this is Weber et al.’s (2011) moon model:","category":"page"},{"location":"types/#","page":"Model types","title":"Model types","text":"using SeisModels, Plots\np = plot(legend=:bottom, framestyle=:box, grid=false, title=\"SteppedLayeredModel example: the moon\", xlabel=\"Radius (km)\", ylabel=\"Velocity (km/s) or density (g/cm^3)\")\nfor (f,l) in zip((vp, vs, SeisModels.density), (\"Vp\", \"Vs\", \"Density\"))\n    plot!(p, r->f(MOON_WEBER_2011, r), 0, surface_radius(MOON_WEBER_2011), label=l, line=2)\nend\nvline!(p, MOON_WEBER_2011.r, label=\"Layer tops\", l=(0.5, :dash))\nsavefig(p, \"SteppedLayeredModel_example.svg\")","category":"page"},{"location":"types/#","page":"Model types","title":"Model types","text":"(Image: Example of a SteppedLayeredModel)","category":"page"},{"location":"types/#","page":"Model types","title":"Model types","text":"SteppedLayeredModel","category":"page"},{"location":"types/#SeisModels.SteppedLayeredModel","page":"Model types","title":"SeisModels.SteppedLayeredModel","text":"SteppedLayeredModel <: SeisModel1D\n\nA SteppedLayeredModel contains n layers with maximum radius r km, each with a constant velocity.\n\n\n\n\n\n","category":"type"},{"location":"types/#LinearLayeredModel-1","page":"Model types","title":"LinearLayeredModel","text":"","category":"section"},{"location":"types/#","page":"Model types","title":"Model types","text":"A LinearLayeredModel is described by radial nodes, between which the properties vary linearly.  Discontinutities are added by setting two subsequent nodes to have the same radii but different properties.","category":"page"},{"location":"types/#","page":"Model types","title":"Model types","text":"For example, a two-layer model for a planetesimal with radius 1 km and a liquid core at 0.3 km, with linearly varying properties, could be given by:","category":"page"},{"location":"types/#","page":"Model types","title":"Model types","text":"using SeisModels\nm = LinearLayeredModel(1.0, 4, [0, 0.3, 0.3, 1], [1, 1, 1.8, 1], [0, 0, 1, 0.7], [], false, [], [], [], [], [], false, [], [])","category":"page"},{"location":"types/#","page":"Model types","title":"Model types","text":"You can see that the nodes are used to define a constant lower layer and linearly-varying upper layer:","category":"page"},{"location":"types/#","page":"Model types","title":"Model types","text":"using Plots, SeisModels\nm = LinearLayeredModel(1.0, 4, [0, 0.3, 0.3, 1], [1, 1, 1.8, 1], [0, 0, 1, 0.7], [], false, [], [], [], [], [], false, [], [])\np = plot(legend=:topright, framestyle=:box, grid=false, title=\"LinearLayeredModel example\", xlabel=\"Radius (km)\", ylabel=\"Velocity (km/s)\")\nfor (f,s,l) in zip((vp, vs), (:vp, :vs), (\"Vp\", \"Vs\"))\n    plot!(p, r->f(m, r), 0, surface_radius(m), label=l, line=2)\n    scatter!(p, m.r, getfield(m, s), label=\"Radial nodes ($l)\")\nend\nsavefig(p, \"LinearLayeredModel_example.svg\")\nnothing","category":"page"},{"location":"types/#","page":"Model types","title":"Model types","text":"(Image: Example of a LinearLayeredModel)","category":"page"},{"location":"types/#","page":"Model types","title":"Model types","text":"LinearLayeredModel","category":"page"},{"location":"types/#SeisModels.LinearLayeredModel","page":"Model types","title":"SeisModels.LinearLayeredModel","text":"LinearLayeredModel <: SeisModel1D\n\nA LinearLayeredModel contains n points at which velocities are defined, with linear interpolation between them.  Hence there are n - 1 layers.\n\nDiscontinuities are represented by two layers with the same radii.\n\n\n\n\n\n","category":"type"},{"location":"types/#PREMPolyModel-1","page":"Model types","title":"PREMPolyModel","text":"","category":"section"},{"location":"types/#","page":"Model types","title":"Model types","text":"PREMPolyModels are parameterised (like PREM) by polynomials in each layer, considering the normalised radius x=ra, where a is the surface radius. Clearly, SteppedLayeredModels and LinearLayeredModels are specific cases of a polynomial parameterisation.","category":"page"},{"location":"types/#","page":"Model types","title":"Model types","text":"For example, PREM’s outer core density in g/cm³ is given by 125815 - 12638x - 36426x^2 - 55281x^3","category":"page"},{"location":"types/#","page":"Model types","title":"Model types","text":"One could imagine a single-layer planet whose velocities are described by","category":"page"},{"location":"types/#","page":"Model types","title":"Model types","text":"V_mathrmP(x) = 3 - 2x^2 - x^3","category":"page"},{"location":"types/#","page":"Model types","title":"Model types","text":"where V_mathrmS = V_mathrmPalpha, and alpha = 17.","category":"page"},{"location":"types/#","page":"Model types","title":"Model types","text":"radii = [500]    # Layer tops in km\nvps =   reshape( # Ensure we have a matrix with 1 column and 4 rows\n        [3       # x^0 coefficients in km/s\n         0       # x^1\n        -2       # x^2\n        -1],     # x^3\n         :, 1)\nα = 1.7\nvss = vps./α\nisaniso = hasQ = false\nrhos = vphs = vpvs = vshs = vsvs = etas = Qmu = Qkappa = []\nfref = 1.0 # Attenuation reference frequency in Hz\n\nm = PREMPolyModel(500, 1, radii, vps, vss, rhos, isaniso, vphs, vpvs, vshs, vsvs, etas, hasQ, Qmu, Qkappa, fref)","category":"page"},{"location":"types/#","page":"Model types","title":"Model types","text":"Note that the polynomial coefficients appear as the row of a matrix, and each layer occupies a column.","category":"page"},{"location":"types/#","page":"Model types","title":"Model types","text":"using Plots: plot, plot!, vline!, savefig\np = plot(xlabel=\"Radius (km)\", ylabel=\"Velocity (km/s) or Density (g/cm^3)\", title=\"PREMPolyModel example\", framestyle=:box, grid=false)\nfor (f, name) in zip((vp, vs), (\"Vp\", \"Vs\"))\n    plot!(p, r->f(m, r), 0, surface_radius(m), label=name)\nend\nvline!(p, m.r, line=(0.5,:dash), label=\"Layer tops\")\nsavefig(\"PREMPolyModel_example.svg\")","category":"page"},{"location":"types/#","page":"Model types","title":"Model types","text":"(Image: Example of a PREMPolyModel)","category":"page"},{"location":"types/#","page":"Model types","title":"Model types","text":"PREMPolyModel","category":"page"},{"location":"types/#SeisModels.PREMPolyModel","page":"Model types","title":"SeisModels.PREMPolyModel","text":"PREMPolyModel <: SeisModel1D\n\nType describing the Earth as a set of layers within which properties vary according to a set of polynomials.\n\nPhysical parameters are represented by arrays of size (order+1, n), where n is the number of layers, and order is the order of polynomial which is used to represent the parameter.  Hence a constant layer has size (1,n), and to compute the value of x in layer i, for an Earth radius of a km, at a radius of r km, the expression is:\n\nval_x = x[i,1] + (r/a)*x[i,2] + (r/a)^2*x[i,3] ... (r/a)^order*x[i,order+1]\n\nThe reference frequency in Hz for the velocities in case of attenuation is given by the fref field.  If fref is NaN, then no reference frequency is defined for the model.\n\n\n\n\n\n","category":"type"},{"location":"types/#Conversion-1","page":"Model types","title":"Conversion","text":"","category":"section"},{"location":"types/#","page":"Model types","title":"Model types","text":"PREMPolyModels can be converted into LinearLayeredModels simply by passing a PREMPolyModel to the LinearLayeredModel constructor, like so:","category":"page"},{"location":"types/#","page":"Model types","title":"Model types","text":"LinearLayeredModel(PREM)","category":"page"},{"location":"types/#","page":"Model types","title":"Model types","text":"The minimum layer thickness can be specified by the second argument.","category":"page"},{"location":"types/#Attenuation-1","page":"Model types","title":"Attenuation","text":"","category":"section"},{"location":"types/#","page":"Model types","title":"Model types","text":"Attenuation in PREMPolyModels is specified as in PREM (see equation (3) in section 6 on page 309).  That means, the shear and bulk quality factors (Q_mu and Q_kappa respectively) control the effective velocities, which will vary by wave frequency.","category":"page"},{"location":"types/#","page":"Model types","title":"Model types","text":"By default, velocities for PREMPolyModels are returned at the reference frequency, which can be found with reffrequency and is given in Hz.  To obtain velocities at other frequencies, just pass a target frequency to the relevant function via the freq keyword argument.","category":"page"},{"location":"types/#","page":"Model types","title":"Model types","text":"In this example, we ask for the Voigt average isotropic shear-wave velocity at radius 4500 km for a frequency of 0.01 Hz (equally, 100 s period):","category":"page"},{"location":"types/#","page":"Model types","title":"Model types","text":"vs(PREM, 4500, freq=0.01)","category":"page"}]
}
