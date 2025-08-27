using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace APISkylineBDD.data;

public partial class DataContext : DbContext
{
    public DataContext()
    {
    }

    public DataContext(DbContextOptions<DataContext> options)
        : base(options)
    {
    }

    public virtual DbSet<NopaccBatiOwner> NopaccBatiOwners { get; set; }

    public virtual DbSet<NopaccCommune> NopaccCommunes { get; set; }

    public virtual DbSet<NopaccPdlGeo> NopaccPdlGeos { get; set; }

    public virtual DbSet<NopaccPdlProdPrj> NopaccPdlProdPrjs { get; set; }

    public virtual DbSet<NopaccPdlSelectPrj> NopaccPdlSelectPrjs { get; set; }

    public virtual DbSet<NopaccPeriAcc> NopaccPeriAccs { get; set; }

    public virtual DbSet<NopaccTarifDcx> NopaccTarifDcxes { get; set; }

    public virtual DbSet<NopaccTarifDesc> NopaccTarifDescs { get; set; }

    public virtual DbSet<NopaccTarifValue> NopaccTarifValues { get; set; }

    public virtual DbSet<Patrimony> Patrimonies { get; set; }

    public virtual DbSet<PatrimonyBatiment> PatrimonyBatiments { get; set; }

    public virtual DbSet<PatrimonySite> PatrimonySites { get; set; }

    public virtual DbSet<SynthesisDeliveryPoint> SynthesisDeliveryPoints { get; set; }

    public virtual DbSet<Test> Tests { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {

    }
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.HasPostgresExtension("postgis");

        modelBuilder.Entity<NopaccBatiOwner>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("nopacc_bati_owner_pk");

            entity.ToTable("nopacc_bati_owner", "cadastre_solaire");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.EmplacementDcx)
                .HasMaxLength(250)
                .HasColumnName("emplacement_dcx");
            entity.Property(e => e.FiltreEpci)
                .HasMaxLength(150)
                .HasColumnName("filtre_epci");
            entity.Property(e => e.OwnerBati)
                .HasMaxLength(150)
                .HasColumnName("owner_bati");
            entity.Property(e => e.TypeBati)
                .HasMaxLength(150)
                .HasColumnName("type_bati");
        });

        modelBuilder.Entity<NopaccCommune>(entity =>
        {
            entity
                .HasNoKey()
                .ToTable("nopacc_communes", "cadastre_solaire");

            entity.HasIndex(e => e.Code, "idx_713_code");

            entity.Property(e => e.Code)
                .HasMaxLength(5)
                .HasColumnName("code");
            entity.Property(e => e.Geom)
                .HasColumnType("geometry(MultiPolygon,2154)")
                .HasColumnName("geom");
            entity.Property(e => e.GeomCc)
                .HasColumnType("geometry(MultiPolygon,3947)")
                .HasColumnName("geom_cc");
            entity.Property(e => e.Gid).HasColumnName("gid");
            entity.Property(e => e.Nom)
                .HasMaxLength(50)
                .HasColumnName("nom");
            entity.Property(e => e.NomCarto)
                .HasMaxLength(50)
                .HasColumnName("nom_carto");
        });

        modelBuilder.Entity<NopaccPdlGeo>(entity =>
        {
            entity.HasKey(e => e.IdPdlGeo).HasName("nopacc_pdl_geo_pkey1");

            entity.ToTable("nopacc_pdl_geo", "cadastre_solaire");

            entity.HasIndex(e => e.IdOwner, "idx_1341_id_owner");

            entity.HasIndex(e => e.IdTarif, "idx_4022_id_tarif");

            entity.HasIndex(e => e.Invariant, "idx_9624_invariant");

            entity.Property(e => e.IdPdlGeo)
                .HasDefaultValueSql("nextval('cadastre_solaire.nopacc_pdl_geo_id_pdl_geo_seq1'::regclass)")
                .HasColumnName("id_pdl_geo");
            entity.Property(e => e.CodeInsee)
                .HasMaxLength(10)
                .HasColumnName("code_insee");
            entity.Property(e => e.Conso2020).HasColumnName("conso2020");
            entity.Property(e => e.Conso2021).HasColumnName("conso2021");
            entity.Property(e => e.Conso2022).HasColumnName("conso2022");
            entity.Property(e => e.Conso2023).HasColumnName("conso2023");
            entity.Property(e => e.Deprecie)
                .HasMaxLength(10)
                .HasColumnName("deprecie");
            entity.Property(e => e.Diametre)
                .HasDefaultValue(2000)
                .HasColumnName("diametre");
            entity.Property(e => e.GeolocaliserDcx).HasColumnName("geolocaliser_dcx");
            entity.Property(e => e.Geom)
                .HasColumnType("geometry(Point,2154)")
                .HasColumnName("geom");
            entity.Property(e => e.IdOwner).HasColumnName("id_owner");
            entity.Property(e => e.IdTarif).HasColumnName("id_tarif");
            entity.Property(e => e.InvaSite)
                .HasMaxLength(150)
                .HasColumnName("inva_site");
            entity.Property(e => e.Invariant)
                .HasMaxLength(250)
                .HasColumnName("invariant");
            entity.Property(e => e.ModifGeom).HasColumnName("modif_geom");
            entity.Property(e => e.NomPatrimony)
                .HasMaxLength(250)
                .HasColumnName("nom_patrimony");
            entity.Property(e => e.NomPeri)
                .HasMaxLength(100)
                .HasColumnName("nom_peri");
            entity.Property(e => e.NomTarif)
                .HasMaxLength(150)
                .HasColumnName("nom_tarif");
            entity.Property(e => e.NumeroRaePce)
                .HasMaxLength(150)
                .HasColumnName("numero_rae_pce");
            entity.Property(e => e.Owner)
                .HasMaxLength(150)
                .HasColumnName("owner");
            entity.Property(e => e.PuissanceSouscriteReduite).HasColumnName("puissance_souscrite_reduite");
            entity.Property(e => e.TypeInvariant)
                .HasMaxLength(150)
                .HasColumnName("type_invariant");
            entity.Property(e => e.UpdatBbuf).HasColumnName("updat_bbuf");
        });

        modelBuilder.Entity<NopaccPdlProdPrj>(entity =>
        {
            entity.HasKey(e => new { e.IdPeriAcc, e.IdPdlGeo }).HasName("nopacc_pdl_product_prj_pkey");

            entity.ToTable("nopacc_pdl_prod_prj", "cadastre_solaire");

            entity.HasIndex(e => e.IdProduct, "nopacc_pdl_product_prj_id_product_key").IsUnique();

            entity.Property(e => e.IdPeriAcc).HasColumnName("id_peri_acc");
            entity.Property(e => e.IdPdlGeo).HasColumnName("id_pdl_geo");
            entity.Property(e => e.IdProduct)
                .ValueGeneratedOnAdd()
                .HasColumnName("id_product");

            entity.HasOne(d => d.IdPdlGeoNavigation).WithMany(p => p.NopaccPdlProdPrjs)
                .HasForeignKey(d => d.IdPdlGeo)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("nopacc_pdl_product_prj_id_pdl_geo_fkey");
        });

        modelBuilder.Entity<NopaccPdlSelectPrj>(entity =>
        {
            entity.HasKey(e => new { e.IdPeriAcc, e.IdPdlGeo }).HasName("nopacc_pdl_select_prj_pkey");

            entity.ToTable("nopacc_pdl_select_prj", "cadastre_solaire");

            entity.HasIndex(e => e.IdSelect, "nopacc_pdl_select_prj_id_select_key").IsUnique();

            entity.Property(e => e.IdPeriAcc).HasColumnName("id_peri_acc");
            entity.Property(e => e.IdPdlGeo).HasColumnName("id_pdl_geo");
            entity.Property(e => e.Desactive)
                .HasDefaultValue(false)
                .HasColumnName("desactive");
            entity.Property(e => e.IdSelect)
                .ValueGeneratedOnAdd()
                .HasColumnName("id_select");

            entity.HasOne(d => d.IdPdlGeoNavigation).WithMany(p => p.NopaccPdlSelectPrjs)
                .HasForeignKey(d => d.IdPdlGeo)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("nopacc_pdl_select_prj_id_pdl_geo_fkey");
        });

        modelBuilder.Entity<NopaccPeriAcc>(entity =>
        {
            entity.HasKey(e => e.IdPeriAcc).HasName("nopacc_peri_acc_pkey");

            entity.ToTable("nopacc_peri_acc", "cadastre_solaire");

            entity.Property(e => e.IdPeriAcc).HasColumnName("id_peri_acc");
            entity.Property(e => e.DateCrea).HasColumnName("date_crea");
            entity.Property(e => e.Derogation).HasColumnName("derogation");
            entity.Property(e => e.FiltCcOwner)
                .HasColumnType("character varying")
                .HasColumnName("filt_cc_owner");
            entity.Property(e => e.FiltCommunesGeo)
                .HasColumnType("character varying")
                .HasColumnName("filt_communes_geo");
            entity.Property(e => e.FiltConso)
                .HasColumnType("character varying")
                .HasColumnName("filt_conso");
            entity.Property(e => e.FiltDecocheOwner)
                .HasColumnType("character varying")
                .HasColumnName("filt_decoche_owner");
            entity.Property(e => e.FiltNom)
                .HasColumnType("character varying")
                .HasColumnName("filt_nom");
            entity.Property(e => e.FiltOwner)
                .HasColumnType("character varying")
                .HasColumnName("filt_owner");
            entity.Property(e => e.FiltPdl)
                .HasColumnType("character varying")
                .HasColumnName("filt_pdl");
            entity.Property(e => e.FiltPuissance)
                .HasColumnType("character varying")
                .HasColumnName("filt_puissance");
            entity.Property(e => e.FiltTarif)
                .HasColumnType("character varying")
                .HasColumnName("filt_tarif");
            entity.Property(e => e.Geom)
                .HasColumnType("geometry(Polygon,2154)")
                .HasColumnName("geom");
            entity.Property(e => e.IdPdlProduct)
                .HasColumnType("character varying")
                .HasColumnName("id_pdl_product");
            entity.Property(e => e.NomPeri)
                .HasMaxLength(50)
                .HasColumnName("nom_peri");
        });

        modelBuilder.Entity<NopaccTarifDcx>(entity =>
        {
            entity.HasKey(e => e.IdCorrespondance).HasName("tarif_dcx_pkey");

            entity.ToTable("nopacc_tarif_dcx", "cadastre_solaire");

            entity.Property(e => e.IdCorrespondance)
                .HasDefaultValueSql("nextval('cadastre_solaire.tarif_dcx_id_seq'::regclass)")
                .HasColumnName("id_correspondance");
            entity.Property(e => e.IdTarif).HasColumnName("id_tarif");
            entity.Property(e => e.NbDcx).HasColumnName("nb_dcx");
            entity.Property(e => e.NomDcx)
                .HasColumnType("character varying")
                .HasColumnName("nom_dcx");
        });

        modelBuilder.Entity<NopaccTarifDesc>(entity =>
        {
            entity.HasKey(e => e.IdTarif).HasName("tarif_desc_pkey");

            entity.ToTable("nopacc_tarif_desc", "cadastre_solaire");

            entity.Property(e => e.IdTarif)
                .HasDefaultValueSql("nextval('cadastre_solaire.tarif_desc_id_seq'::regclass)")
                .HasColumnName("id_tarif");
            entity.Property(e => e.ClasseTemporelle)
                .HasColumnType("character varying")
                .HasColumnName("classe_temporelle");
            entity.Property(e => e.IntituleMarche)
                .HasColumnType("character varying")
                .HasColumnName("intitule_marche");
            entity.Property(e => e.Segment)
                .HasColumnType("character varying")
                .HasColumnName("segment");
            entity.Property(e => e.SegmentTarif)
                .HasColumnType("character varying")
                .HasColumnName("segment_tarif");
            entity.Property(e => e.SegmentTarifCt)
                .HasColumnType("character varying")
                .HasColumnName("segment_tarif_ct");
            entity.Property(e => e.Tarif)
                .HasColumnType("character varying")
                .HasColumnName("tarif");
        });

        modelBuilder.Entity<NopaccTarifValue>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("tarif_value_pkey");

            entity.ToTable("nopacc_tarif_value", "cadastre_solaire");

            entity.HasIndex(e => e.IdTarif, "idx_8392_id_tarif");

            entity.Property(e => e.Id)
                .HasDefaultValueSql("nextval('cadastre_solaire.tarif_value_id_seq'::regclass)")
                .HasColumnName("id");
            entity.Property(e => e.AnneeExercice).HasColumnName("annee_exercice");
            entity.Property(e => e.IdTarif).HasColumnName("id_tarif");
            entity.Property(e => e.TarifEstimeSansTurpeSansCspe).HasColumnName("tarif_estime_sans_turpe_sans_cspe");
            entity.Property(e => e.TurpeEstimePartVariable).HasColumnName("turpe_estime_part_variable");
        });

        modelBuilder.Entity<Patrimony>(entity =>
        {
            entity
                .HasNoKey()
                .ToTable("patrimony", "cadastre_solaire");

            entity.HasIndex(e => e.Id, "ix_cadastre_solaire_patrimony_id");

            entity.Property(e => e.Access).HasColumnName("access");
            entity.Property(e => e.AdditionalEqpt).HasColumnName("additional_eqpt");
            entity.Property(e => e.Adresse).HasColumnName("adresse");
            entity.Property(e => e.AdresseComplete).HasColumnName("adresse_complete");
            entity.Property(e => e.Age).HasColumnName("age");
            entity.Property(e => e.Category).HasColumnName("category");
            entity.Property(e => e.CellTechnology).HasColumnName("cell_technology");
            entity.Property(e => e.CodePostal).HasColumnName("code_postal");
            entity.Property(e => e.Commune).HasColumnName("commune");
            entity.Property(e => e.Connection).HasColumnName("connection");
            entity.Property(e => e.ContactNumber).HasColumnName("contact_number");
            entity.Property(e => e.ContractHolder).HasColumnName("contract_holder");
            entity.Property(e => e.ContractTerm).HasColumnName("contract_term");
            entity.Property(e => e.Contrat).HasColumnName("contrat");
            entity.Property(e => e.Deprecie).HasColumnName("deprecie");
            entity.Property(e => e.DeprecieDate).HasColumnName("deprecie_date");
            entity.Property(e => e.DeprecieDate2).HasColumnName("deprecie_date_2");
            entity.Property(e => e.DeprecieTxt).HasColumnName("deprecie_txt");
            entity.Property(e => e.Expendables).HasColumnName("expendables");
            entity.Property(e => e.FareSegment).HasColumnName("fare_segment");
            entity.Property(e => e.Fournisseur).HasColumnName("fournisseur");
            entity.Property(e => e.GhostId).HasColumnName("ghost_id");
            entity.Property(e => e.HasChildren).HasColumnName("has_children");
            entity.Property(e => e.HasComponents).HasColumnName("has_components");
            entity.Property(e => e.HasSalesAgreement).HasColumnName("has_sales_agreement");
            entity.Property(e => e.HasUseReactiveEnergy).HasColumnName("has_use_reactive_energy");
            entity.Property(e => e.Icon).HasColumnName("icon");
            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.ImpulseMeter).HasColumnName("impulse_meter");
            entity.Property(e => e.Info).HasColumnName("info");
            entity.Property(e => e.InstallationDate).HasColumnName("installation_date");
            entity.Property(e => e.Invariant).HasColumnName("invariant");
            entity.Property(e => e.InvoicingType).HasColumnName("invoicing_type");
            entity.Property(e => e.IsCostSpDependency).HasColumnName("is_cost_sp_dependency");
            entity.Property(e => e.IsGhost).HasColumnName("is_ghost");
            entity.Property(e => e.IsMeter).HasColumnName("is_meter");
            entity.Property(e => e.IsTrueGhost).HasColumnName("is_true_ghost");
            entity.Property(e => e.Latitude).HasColumnName("latitude");
            entity.Property(e => e.Longitude).HasColumnName("longitude");
            entity.Property(e => e.ManualStatement).HasColumnName("manual_statement");
            entity.Property(e => e.Marque).HasColumnName("marque");
            entity.Property(e => e.Modele).HasColumnName("modele");
            entity.Property(e => e.Name).HasColumnName("name");
            entity.Property(e => e.NetworkManager).HasColumnName("network_manager");
            entity.Property(e => e.NodeId).HasColumnName("node_id");
            entity.Property(e => e.NombreOnduleur).HasColumnName("nombre_onduleur");
            entity.Property(e => e.NumeroRaePce).HasColumnName("numero_rae_pce");
            entity.Property(e => e.OutputInformation).HasColumnName("output_information");
            entity.Property(e => e.Owner).HasColumnName("owner");
            entity.Property(e => e.PanelTechnology).HasColumnName("panel_technology");
            entity.Property(e => e.PayingInvoice).HasColumnName("paying_invoice");
            entity.Property(e => e.Pays).HasColumnName("pays");
            entity.Property(e => e.ProductionTheoriqueAnnuelle).HasColumnName("production_theorique_annuelle");
            entity.Property(e => e.PuissanceParOnduleur).HasColumnName("puissance_par_onduleur");
            entity.Property(e => e.PuissanceSouscriteReduite).HasColumnName("puissance_souscrite_reduite");
            entity.Property(e => e.PurchasingGroup).HasColumnName("purchasing_group");
            entity.Property(e => e.Reference).HasColumnName("reference");
            entity.Property(e => e.Remarque).HasColumnName("remarque");
            entity.Property(e => e.StatementClient).HasColumnName("statement_client");
            entity.Property(e => e.StatementSupplier).HasColumnName("statement_supplier");
            entity.Property(e => e.SubscriptionHolder).HasColumnName("subscription_holder");
            entity.Property(e => e.Superviseur).HasColumnName("superviseur");
            entity.Property(e => e.SupplyPointNumber).HasColumnName("supply_point_number");
            entity.Property(e => e.SurfaceInstallee).HasColumnName("surface_installee");
            entity.Property(e => e.Tarif).HasColumnName("tarif");
            entity.Property(e => e.TarifCode).HasColumnName("tarif_code");
            entity.Property(e => e.Temporalite).HasColumnName("temporalite");
            entity.Property(e => e.Text).HasColumnName("text");
            entity.Property(e => e.TotalInstalledPower).HasColumnName("total_installed_power");
            entity.Property(e => e.TypeInstallation).HasColumnName("type_installation");
            entity.Property(e => e.TypeIntegration).HasColumnName("type_integration");
            entity.Property(e => e.TypeObject).HasColumnName("type_object");
            entity.Property(e => e.TypeOutputInformation).HasColumnName("type_output_information");
            entity.Property(e => e.VoltageDomain).HasColumnName("voltage_domain");
            entity.Property(e => e.WeightPulse).HasColumnName("weight_pulse");
        });

        modelBuilder.Entity<PatrimonyBatiment>(entity =>
        {
            entity
                .HasNoKey()
                .ToTable("patrimony_batiment", "cadastre_solaire");

            entity.Property(e => e.Adresse).HasColumnName("adresse");
            entity.Property(e => e.AdresseComplete).HasColumnName("adresse_complete");
            entity.Property(e => e.Altitude).HasColumnName("altitude");
            entity.Property(e => e.ArchitecturalEnergyEfficiency).HasColumnName("architectural_energy_efficiency");
            entity.Property(e => e.AvailableHeightClearance).HasColumnName("available_height_clearance");
            entity.Property(e => e.BuildingLease).HasColumnName("building_lease");
            entity.Property(e => e.BuildingPabType).HasColumnName("building_pab_type");
            entity.Property(e => e.CapaciteAccueil).HasColumnName("capacite_accueil");
            entity.Property(e => e.CaseSubjection).HasColumnName("case_subjection");
            entity.Property(e => e.CategoryPab).HasColumnName("category_pab");
            entity.Property(e => e.CodePostal).HasColumnName("code_postal");
            entity.Property(e => e.Commune).HasColumnName("commune");
            entity.Property(e => e.ConstructionValue).HasColumnName("construction_value");
            entity.Property(e => e.ConstructionYear).HasColumnName("construction_year");
            entity.Property(e => e.Copropriete).HasColumnName("copropriete");
            entity.Property(e => e.DateLastBuildingPermit).HasColumnName("date_last_building_permit");
            entity.Property(e => e.Deprecie).HasColumnName("deprecie");
            entity.Property(e => e.DeprecieDate).HasColumnName("deprecie_date");
            entity.Property(e => e.DeprecieDate2).HasColumnName("deprecie_date_2");
            entity.Property(e => e.DeprecieTxt).HasColumnName("deprecie_txt");
            entity.Property(e => e.EmphyteuticLease).HasColumnName("emphyteutic_lease");
            entity.Property(e => e.Frequentation).HasColumnName("frequentation");
            entity.Property(e => e.GhostId).HasColumnName("ghost_id");
            entity.Property(e => e.GradeSubjection).HasColumnName("grade_subjection");
            entity.Property(e => e.HasChildren).HasColumnName("has_children");
            entity.Property(e => e.HasComponents).HasColumnName("has_components");
            entity.Property(e => e.Icon).HasColumnName("icon");
            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Info).HasColumnName("info");
            entity.Property(e => e.Invariant).HasColumnName("invariant");
            entity.Property(e => e.IsGhost).HasColumnName("is_ghost");
            entity.Property(e => e.IsMeter).HasColumnName("is_meter");
            entity.Property(e => e.IsPublicDomain).HasColumnName("is_public_domain");
            entity.Property(e => e.IsTertiaryDecree).HasColumnName("is_tertiary_decree");
            entity.Property(e => e.IsTrueGhost).HasColumnName("is_true_ghost");
            entity.Property(e => e.IubBuilding).HasColumnName("iub_building");
            entity.Property(e => e.IubLot).HasColumnName("iub_lot");
            entity.Property(e => e.IubPlot).HasColumnName("iub_plot");
            entity.Property(e => e.IubPrefix).HasColumnName("iub_prefix");
            entity.Property(e => e.IubSection).HasColumnName("iub_section");
            entity.Property(e => e.MaintenanceAgreement).HasColumnName("maintenance_agreement");
            entity.Property(e => e.MeteoCorrectorCold).HasColumnName("meteo_corrector_cold");
            entity.Property(e => e.MeteoCorrectorHeat).HasColumnName("meteo_corrector_heat");
            entity.Property(e => e.Name).HasColumnName("name");
            entity.Property(e => e.NodeId).HasColumnName("node_id");
            entity.Property(e => e.NombreRepas).HasColumnName("nombre_repas");
            entity.Property(e => e.NumLastBuildingPermit).HasColumnName("num_last_building_permit");
            entity.Property(e => e.NumberOfFloorsNeg).HasColumnName("number_of_floors_neg");
            entity.Property(e => e.NumberOfFloorsPos).HasColumnName("number_of_floors_pos");
            entity.Property(e => e.OccupancyAgreement).HasColumnName("occupancy_agreement");
            entity.Property(e => e.OperatEfa).HasColumnName("operat_efa");
            entity.Property(e => e.Pays).HasColumnName("pays");
            entity.Property(e => e.PurchaseValue).HasColumnName("purchase_value");
            entity.Property(e => e.Purpose).HasColumnName("purpose");
            entity.Property(e => e.Reference).HasColumnName("reference");
            entity.Property(e => e.Remarque).HasColumnName("remarque");
            entity.Property(e => e.RentalValue).HasColumnName("rental_value");
            entity.Property(e => e.ServiceManager).HasColumnName("service_manager");
            entity.Property(e => e.Shob).HasColumnName("shob");
            entity.Property(e => e.Shon).HasColumnName("shon");
            entity.Property(e => e.Siret).HasColumnName("siret");
            entity.Property(e => e.SummerComfort).HasColumnName("summer_comfort");
            entity.Property(e => e.Superviseur).HasColumnName("superviseur");
            entity.Property(e => e.SurfaceBassin).HasColumnName("surface_bassin");
            entity.Property(e => e.SurfaceChauffee).HasColumnName("surface_chauffee");
            entity.Property(e => e.SurfaceEmpriseSol).HasColumnName("surface_emprise_sol");
            entity.Property(e => e.SurfaceFonciere).HasColumnName("surface_fonciere");
            entity.Property(e => e.SurfacePlancher).HasColumnName("surface_plancher");
            entity.Property(e => e.SurfaceRt).HasColumnName("surface_rt");
            entity.Property(e => e.SurfaceUtile).HasColumnName("surface_utile");
            entity.Property(e => e.Text).HasColumnName("text");
            entity.Property(e => e.TypeObject).HasColumnName("type_object");
            entity.Property(e => e.Volume).HasColumnName("volume");
            entity.Property(e => e.WeatherStation).HasColumnName("weather_station");
            entity.Property(e => e.WinterComfort).HasColumnName("winter_comfort");
        });

        modelBuilder.Entity<PatrimonySite>(entity =>
        {
            entity
                .HasNoKey()
                .ToTable("patrimony_site", "cadastre_solaire");

            entity.Property(e => e.Adresse).HasColumnName("adresse");
            entity.Property(e => e.AdresseComplete).HasColumnName("adresse_complete");
            entity.Property(e => e.Altitude).HasColumnName("altitude");
            entity.Property(e => e.BuildingLease).HasColumnName("building_lease");
            entity.Property(e => e.CapaciteAccueil).HasColumnName("capacite_accueil");
            entity.Property(e => e.CaseSubjection).HasColumnName("case_subjection");
            entity.Property(e => e.ChargingZoneGaz).HasColumnName("charging_zone_gaz");
            entity.Property(e => e.ClimateArea).HasColumnName("climate_area");
            entity.Property(e => e.CodePostal).HasColumnName("code_postal");
            entity.Property(e => e.Commune).HasColumnName("commune");
            entity.Property(e => e.Copropriete).HasColumnName("copropriete");
            entity.Property(e => e.Deprecie).HasColumnName("deprecie");
            entity.Property(e => e.DeprecieDate).HasColumnName("deprecie_date");
            entity.Property(e => e.DeprecieDate2).HasColumnName("deprecie_date_2");
            entity.Property(e => e.DeprecieTxt).HasColumnName("deprecie_txt");
            entity.Property(e => e.EmphyteuticLease).HasColumnName("emphyteutic_lease");
            entity.Property(e => e.Frequentation).HasColumnName("frequentation");
            entity.Property(e => e.GeothermalPotential).HasColumnName("geothermal_potential");
            entity.Property(e => e.GhostId).HasColumnName("ghost_id");
            entity.Property(e => e.GradeSubjection).HasColumnName("grade_subjection");
            entity.Property(e => e.HasChildren).HasColumnName("has_children");
            entity.Property(e => e.HasComponents).HasColumnName("has_components");
            entity.Property(e => e.HasResidentialSchool).HasColumnName("has_residential_school");
            entity.Property(e => e.HasShed).HasColumnName("has_shed");
            entity.Property(e => e.Icon).HasColumnName("icon");
            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Info).HasColumnName("info");
            entity.Property(e => e.Invariant).HasColumnName("invariant");
            entity.Property(e => e.IsGhost).HasColumnName("is_ghost");
            entity.Property(e => e.IsMeter).HasColumnName("is_meter");
            entity.Property(e => e.IsPublicDomain).HasColumnName("is_public_domain");
            entity.Property(e => e.IsTertiaryDecree).HasColumnName("is_tertiary_decree");
            entity.Property(e => e.IsTrueGhost).HasColumnName("is_true_ghost");
            entity.Property(e => e.IubBuilding).HasColumnName("iub_building");
            entity.Property(e => e.IubLot).HasColumnName("iub_lot");
            entity.Property(e => e.IubPlot).HasColumnName("iub_plot");
            entity.Property(e => e.IubPrefix).HasColumnName("iub_prefix");
            entity.Property(e => e.IubSection).HasColumnName("iub_section");
            entity.Property(e => e.MaintenanceAgreement).HasColumnName("maintenance_agreement");
            entity.Property(e => e.MeteoCorrectorCold).HasColumnName("meteo_corrector_cold");
            entity.Property(e => e.MeteoCorrectorHeat).HasColumnName("meteo_corrector_heat");
            entity.Property(e => e.Name).HasColumnName("name");
            entity.Property(e => e.NodeId).HasColumnName("node_id");
            entity.Property(e => e.NombreBatiments).HasColumnName("nombre_batiments");
            entity.Property(e => e.NombreRepas).HasColumnName("nombre_repas");
            entity.Property(e => e.OccupancyAgreement).HasColumnName("occupancy_agreement");
            entity.Property(e => e.OperatEfa).HasColumnName("operat_efa");
            entity.Property(e => e.Pays).HasColumnName("pays");
            entity.Property(e => e.Purpose).HasColumnName("purpose");
            entity.Property(e => e.Reference).HasColumnName("reference");
            entity.Property(e => e.ReferencesCadastrales).HasColumnName("references_cadastrales");
            entity.Property(e => e.RelevantComission).HasColumnName("relevant_comission");
            entity.Property(e => e.Remarque).HasColumnName("remarque");
            entity.Property(e => e.ServiceManager).HasColumnName("service_manager");
            entity.Property(e => e.Shob).HasColumnName("shob");
            entity.Property(e => e.Shon).HasColumnName("shon");
            entity.Property(e => e.Siret).HasColumnName("siret");
            entity.Property(e => e.SolarPhotovoltaicPotential).HasColumnName("solar_photovoltaic_potential");
            entity.Property(e => e.SolarThermalPotential).HasColumnName("solar_thermal_potential");
            entity.Property(e => e.Superviseur).HasColumnName("superviseur");
            entity.Property(e => e.SurfaceBassin).HasColumnName("surface_bassin");
            entity.Property(e => e.SurfaceChauffee).HasColumnName("surface_chauffee");
            entity.Property(e => e.SurfaceEmpriseSol).HasColumnName("surface_emprise_sol");
            entity.Property(e => e.SurfaceFonciere).HasColumnName("surface_fonciere");
            entity.Property(e => e.SurfacePlancher).HasColumnName("surface_plancher");
            entity.Property(e => e.SurfaceRt).HasColumnName("surface_rt");
            entity.Property(e => e.SurfaceUtile).HasColumnName("surface_utile");
            entity.Property(e => e.Text).HasColumnName("text");
            entity.Property(e => e.TypeObject).HasColumnName("type_object");
            entity.Property(e => e.Volume).HasColumnName("volume");
            entity.Property(e => e.WeatherStation).HasColumnName("weather_station");
            entity.Property(e => e.WoodEnergyPotential).HasColumnName("wood_energy_potential");
        });

        modelBuilder.Entity<SynthesisDeliveryPoint>(entity =>
        {
            entity
                .HasNoKey()
                .ToTable("synthesis_delivery_point", "cadastre_solaire");

            entity.HasIndex(e => e.Id, "ix_cadastre_solaire_synthesis_delivery_point_id");

            // entity.Property(e => e.Adresse).HasColumnName("adresse");
            entity.Property(e => e.Annee).HasColumnName("annee");
            // entity.Property(e => e.Co2Kg).HasColumnName("co2_kg");
            // entity.Property(e => e.CodeTarif).HasColumnName("code_tarif");
            // entity.Property(e => e.ConsoUnite).HasColumnName("conso_unite");
            entity.Property(e => e.Consommation).HasColumnName("consommation");
            // entity.Property(e => e.CoutTtc).HasColumnName("cout_ttc");
            // entity.Property(e => e.Deplacement).HasColumnName("deplacement");
            // entity.Property(e => e.Energie).HasColumnName("energie");
            // entity.Property(e => e.EnergieFinaleKwhEff).HasColumnName("energie_finale_kwh_eff");
            // entity.Property(e => e.EnergiePrimaireKwhEp).HasColumnName("energie_primaire_kwh_ep");
            // entity.Property(e => e.Fournisseur).HasColumnName("fournisseur");
            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Invariant).HasColumnName("invariant");
            entity.Property(e => e.Mois).HasColumnName("mois");
            // entity.Property(e => e.Nom).HasColumnName("nom");
            // entity.Property(e => e.NumeroContrat).HasColumnName("numero_contrat");
            entity.Property(e => e.NumeroPdl).HasColumnName("numero_pdl");
            // entity.Property(e => e.PuissanceSouscriteReduite).HasColumnName("puissance_souscrite_reduite");
            // entity.Property(e => e.Raepce).HasColumnName("raepce");
            // entity.Property(e => e.Tarif).HasColumnName("tarif");
            // entity.Property(e => e.Type).HasColumnName("type");
            // entity.Property(e => e.Ville).HasColumnName("ville");
        });

        modelBuilder.Entity<Test>(entity =>
        {
            entity.HasKey(e => e.IdPdlGeo).HasName("test_pkey");

            entity.ToTable("test", "cadastre_solaire");

            entity.Property(e => e.IdPdlGeo).HasColumnName("id_pdl_geo");
            entity.Property(e => e.CodeInsee)
                .HasMaxLength(10)
                .HasColumnName("code_insee");
            entity.Property(e => e.Conso2020).HasColumnName("conso2020");
            entity.Property(e => e.Conso2021).HasColumnName("conso2021");
            entity.Property(e => e.Conso2022).HasColumnName("conso2022");
            entity.Property(e => e.Conso2023).HasColumnName("conso2023");
            entity.Property(e => e.Deprecie)
                .HasMaxLength(10)
                .HasColumnName("deprecie");
            entity.Property(e => e.Diametre)
                .HasDefaultValue(2000)
                .HasColumnName("diametre");
            entity.Property(e => e.GeolocaliserDcx).HasColumnName("geolocaliser_dcx");
            entity.Property(e => e.Geom)
                .HasColumnType("geometry(Point,2154)")
                .HasColumnName("geom");
            entity.Property(e => e.IdOwner).HasColumnName("id_owner");
            entity.Property(e => e.IdTarif).HasColumnName("id_tarif");
            entity.Property(e => e.InvaSite)
                .HasMaxLength(150)
                .HasColumnName("inva_site");
            entity.Property(e => e.Invariant)
                .HasMaxLength(250)
                .HasColumnName("invariant");
            entity.Property(e => e.ModifGeom).HasColumnName("modif_geom");
            entity.Property(e => e.NomPatrimony)
                .HasMaxLength(250)
                .HasColumnName("nom_patrimony");
            entity.Property(e => e.NomPeri)
                .HasMaxLength(100)
                .HasColumnName("nom_peri");
            entity.Property(e => e.NomTarif)
                .HasMaxLength(150)
                .HasColumnName("nom_tarif");
            entity.Property(e => e.NumeroRaePce)
                .HasMaxLength(150)
                .HasColumnName("numero_rae_pce");
            entity.Property(e => e.Owner)
                .HasMaxLength(150)
                .HasColumnName("owner");
            entity.Property(e => e.PuissanceSouscriteReduite).HasColumnName("puissance_souscrite_reduite");
            entity.Property(e => e.TypeInvariant)
                .HasMaxLength(150)
                .HasColumnName("type_invariant");
            entity.Property(e => e.UpdatBbuf).HasColumnName("updat_bbuf");
        });
        modelBuilder.HasSequence("seq_id_peri_acc", "cadastre_solaire").StartsAt(520L);
        modelBuilder.HasSequence("seq_id_select", "cadastre_solaire");

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
