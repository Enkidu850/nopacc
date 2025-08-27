using System;
using System.Collections.Generic;

namespace APISkylineBDD.data;

public partial class PatrimonySite
{
    public long? Id { get; set; }

    public long? NodeId { get; set; }

    public string? TypeObject { get; set; }

    public bool? HasChildren { get; set; }

    public string? Text { get; set; }

    public string? Info { get; set; }

    public bool? IsGhost { get; set; }

    public long? GhostId { get; set; }

    public bool? IsTrueGhost { get; set; }

    public bool? IsMeter { get; set; }

    public bool? HasComponents { get; set; }

    public bool? Deprecie { get; set; }

    public string? DeprecieDate { get; set; }

    public bool? Superviseur { get; set; }

    public string? Icon { get; set; }

    public string? Reference { get; set; }

    public string? Name { get; set; }

    public string? Invariant { get; set; }

    public string? Purpose { get; set; }

    public string? IsPublicDomain { get; set; }

    public string? IsTertiaryDecree { get; set; }

    public string? WeatherStation { get; set; }

    public string? Adresse { get; set; }

    public string? CodePostal { get; set; }

    public string? Commune { get; set; }

    public string? Pays { get; set; }

    public string? Altitude { get; set; }

    public string? DeprecieTxt { get; set; }

    public string? DeprecieDate2 { get; set; }

    public string? BuildingLease { get; set; }

    public string? EmphyteuticLease { get; set; }

    public string? Copropriete { get; set; }

    public string? OccupancyAgreement { get; set; }

    public string? MaintenanceAgreement { get; set; }

    public string? ServiceManager { get; set; }

    public string? RelevantComission { get; set; }

    public string? ChargingZoneGaz { get; set; }

    public string? ClimateArea { get; set; }

    public string? MeteoCorrectorHeat { get; set; }

    public string? MeteoCorrectorCold { get; set; }

    public string? OperatEfa { get; set; }

    public string? GradeSubjection { get; set; }

    public string? CaseSubjection { get; set; }

    public string? Siret { get; set; }

    public string? IubPrefix { get; set; }

    public string? IubSection { get; set; }

    public string? IubPlot { get; set; }

    public string? IubBuilding { get; set; }

    public string? IubLot { get; set; }

    public string? ReferencesCadastrales { get; set; }

    public string? NombreBatiments { get; set; }

    public string? HasResidentialSchool { get; set; }

    public string? HasShed { get; set; }

    public string? WoodEnergyPotential { get; set; }

    public string? SolarPhotovoltaicPotential { get; set; }

    public string? GeothermalPotential { get; set; }

    public string? SolarThermalPotential { get; set; }

    public string? AdresseComplete { get; set; }

    public string? Remarque { get; set; }

    public double? Shon { get; set; }

    public double? SurfaceChauffee { get; set; }

    public double? Shob { get; set; }

    public double? SurfaceRt { get; set; }

    public double? SurfaceUtile { get; set; }

    public double? SurfaceFonciere { get; set; }

    public double? SurfaceEmpriseSol { get; set; }

    public double? SurfacePlancher { get; set; }

    public double? Volume { get; set; }

    public double? CapaciteAccueil { get; set; }

    public double? Frequentation { get; set; }

    public double? SurfaceBassin { get; set; }

    public double? NombreRepas { get; set; }
}
