using System;
using System.Collections.Generic;

namespace APISkylineBDD.data;

public partial class SynthesisDeliveryPoint
{
    public long? Id { get; set; }

    public string? Type { get; set; }

    public string? Tarif { get; set; }

    public string? Invariant { get; set; }

    public string? Nom { get; set; }

    public string? Adresse { get; set; }

    public string? Ville { get; set; }

    public long? NumeroPdl { get; set; }

    public long? Raepce { get; set; }

    public string? Energie { get; set; }

    public string? NumeroContrat { get; set; }

    public string? Fournisseur { get; set; }

    public string? CodeTarif { get; set; }

    public double? PuissanceSouscriteReduite { get; set; }

    public long? Mois { get; set; }

    public long? Annee { get; set; }

    public long? Consommation { get; set; }

    public string? ConsoUnite { get; set; }

    public double? EnergieFinaleKwhEff { get; set; }

    public double? EnergiePrimaireKwhEp { get; set; }

    public double? Co2Kg { get; set; }

    public double? CoutTtc { get; set; }

    public string? Deplacement { get; set; }
}
