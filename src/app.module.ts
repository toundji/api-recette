import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import orclConfig from './config/orcl-config';
import ormConfig from './config/ormconfig';
import { CashFlowController } from './controllers/cash-flow.controller';
import { CompagneController } from './controllers/compagne.controller';
import { DemandeCarteController } from './controllers/demande-carte.controller';
import { FicheTechniqueController } from './controllers/fiche-technique.controller';
import { HydrocarbureController } from './controllers/hydrocarbure.controller';
import { LeggingController } from './controllers/legging.controller';
import { PercepteurController } from './controllers/percepteur.controller';
import { RecetteController } from './controllers/recette.controller';
import { ReditionController } from './controllers/redition.controller';
import { ReditonUemoController } from './controllers/rediton-uemo.controlle';
import { ReditonController } from './controllers/rediton.controller';
import { SiteController } from './controllers/site.controller';
import { SurchageManuelController } from './controllers/surchage-manuel.controller';
import { SurchageUemoiController } from './controllers/surchage-uemoi.controller';
import { UserController } from './controllers/user.controller';
import { VacationController } from './controllers/vacation.controller';
import { VoieController } from './controllers/voie.controller';
import { CashFlow } from './entities/cash-flow.entity';
import { Compagne } from './entities/compagne.entity';
import { DemandeCarte } from './entities/demande-carte.entity';
import { FicheTechnique } from './entities/fiche-technique.entity';
import { Hydrocarbure } from './entities/hydrocarbure.entity';
import { Legging } from './entities/legging.entity';
import { Percepteur } from './entities/percepteur.entity';
import { Recette } from './entities/recette.entity';
import { Redition } from './entities/redition.entity';
import { ReditonUemo } from './entities/rediton-uemo.entity';
import { Rediton } from './entities/rediton.entity';
import { Site } from './entities/site.entity';
import { SurchageManuel } from './entities/surchage-manuel.entity';
import { SurchageUemoi } from './entities/surchage-uemoi.entity';
import { Surchage } from './entities/surchage.entity';
import { User } from './entities/user.entity';
import { Vacation } from './entities/vacation.entity';
import { Voie } from './entities/voie.entity';
import { CashFlowService } from './services/cash-flow.service';
import { CompagneService } from './services/compagne.service';
import { DemandeCarteService } from './services/demande-carte.service';
import { FicheTechniqueService } from './services/fiche-technique.service';
import { HydrocarbureService } from './services/hydrocarbure.service';
import { LeggingService } from './services/legging.service';
import { PercepteurService } from './services/percepteur.service';
import { RecetteService } from './services/recette.service';
import { ReditionService } from './services/redition.service';
import { ReditonUemoService } from './services/rediton-uemo.service';
import { ReditonService } from './services/rediton.service';
import { SiteService } from './services/site.service';
import { SurchageManuelService } from './services/surchage-manuel.service';
import { SurchageUemoiService } from './services/surchage-uemoi.service';
import { SurchageService } from './services/surchage.service';
import { UserService } from './services/user.service';
import { VacationService } from './services/vacation.service';
import { VoieService } from './services/voie.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(orclConfig),
    TypeOrmModule.forFeature([
      CashFlow,
      Compagne,
      DemandeCarte,
      FicheTechnique,
      Hydrocarbure,
      Legging,
      Percepteur,
      Recette,
      Redition,
      ReditonUemo,
      Rediton,
      Site,
      SurchageManuel,
      SurchageUemoi,
      Surchage,
      User,
      Vacation,
      Voie,
    ]),
  ],
  controllers: [
    AppController,
    CashFlowController,
    CompagneController,
    DemandeCarteController,
    FicheTechniqueController,
    HydrocarbureController,
    LeggingController,
    PercepteurController,
    RecetteController,
    ReditionController,
    ReditonUemoController,
    ReditonController,
    SiteController,
    SurchageManuelController,
    SurchageUemoiController,
    SurchageManuelController,
    UserController,
    VacationController,
    VoieController,
  ],
  providers: [
    AppService,
    CashFlowService,
    CompagneService,
    DemandeCarteService,
    FicheTechniqueService,
    HydrocarbureService,
    LeggingService,
    PercepteurService,
    RecetteService,
    ReditionService,
    ReditonUemoService,
    ReditonService,
    SiteService,
    SurchageManuelService,
    SurchageUemoiService,
    SurchageService,
    UserService,
    VacationService,
    VoieService,
  ],
  exports: [
    CashFlowService,
    CompagneService,
    DemandeCarteService,
    FicheTechniqueService,
    HydrocarbureService,
    LeggingService,
    PercepteurService,
    RecetteService,
    ReditionService,
    ReditonUemoService,
    ReditonService,
    SiteService,
    SurchageManuelService,
    SurchageUemoiService,
    SurchageService,
    UserService,
    VacationService,
    VoieService,
  ],
})
export class AppModule {}
