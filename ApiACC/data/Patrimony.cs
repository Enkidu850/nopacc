using System;
using System.Collections.Generic;

namespace APISkylineBDD.data;

public partial class Patrimony
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

    public string? Name { get; set; }

    public long? Age { get; set; }

    public string? Expendables { get; set; }

    public string? InvoicingType { get; set; }

    public string? Reference { get; set; }

    public string? SupplyPointNumber { get; set; }

    public string? NumeroRaePce { get; set; }

    public string? Invariant { get; set; }

    public string? InstallationDate { get; set; }

    public string? ContactNumber { get; set; }

    public string? PurchasingGroup { get; set; }

    public string? Access { get; set; }

    public string? Connection { get; set; }

    public string? Category { get; set; }

    public string? Owner { get; set; }

    public string? SubscriptionHolder { get; set; }

    public string? PayingInvoice { get; set; }

    public string? NetworkManager { get; set; }

    public string? StatementSupplier { get; set; }

    public string? ContractTerm { get; set; }

    public string? ImpulseMeter { get; set; }

    public string? StatementClient { get; set; }

    public string? AdresseComplete { get; set; }

    public string? Marque { get; set; }

    public string? Modele { get; set; }

    public string? OutputInformation { get; set; }

    public string? TypeOutputInformation { get; set; }

    public long? WeightPulse { get; set; }

    public string? Fournisseur { get; set; }

    public string? Contrat { get; set; }

    public string? Tarif { get; set; }

    public string? Adresse { get; set; }

    public long? CodePostal { get; set; }

    public string? Commune { get; set; }

    public string? Pays { get; set; }

    public string? DeprecieTxt { get; set; }

    public string? DeprecieDate2 { get; set; }

    public string? ManualStatement { get; set; }

    public string? AdditionalEqpt { get; set; }

    public string? TarifCode { get; set; }

    public double? PuissanceSouscriteReduite { get; set; }

    public double? Latitude { get; set; }

    public double? Longitude { get; set; }

    public string? Remarque { get; set; }

    public string? HasUseReactiveEnergy { get; set; }

    public string? IsCostSpDependency { get; set; }

    public double? TotalInstalledPower { get; set; }

    public long? TypeInstallation { get; set; }

    public string? HasSalesAgreement { get; set; }

    public string? ContractHolder { get; set; }

    public long? NombreOnduleur { get; set; }

    public double? PuissanceParOnduleur { get; set; }

    public long? CellTechnology { get; set; }

    public long? PanelTechnology { get; set; }

    public long? TypeIntegration { get; set; }

    public double? SurfaceInstallee { get; set; }

    public double? ProductionTheoriqueAnnuelle { get; set; }

    public string? FareSegment { get; set; }

    public string? VoltageDomain { get; set; }

    public string? Temporalite { get; set; }
}
