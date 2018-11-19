using Test
using EarthModels

@testset "Inbuilt models" begin
    @testset "AK135" begin
        @test surface_radius(AK135) == 6371.0
        @test length(AK135.r) == 136
        @test vp(AK135, 0) ≈ 11.2622
        @test isanisotropic(AK135) == false
        @test_throws ErrorException Qμ(AK135, 1000)
    end

    @testset "PREM" begin
        @test surface_radius(PREM) == 6371.0
        @test length(PREM.r) == 13
        @test isanisotropic(PREM) == true
        @test vp(PREM, 0) ≈ 11.2622
        @test Qμ(PREM, 1000) ≈ 84.6
    end
end
