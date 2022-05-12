/* eslint-disable prettier/prettier */
import { Column } from 'typeorm/decorator/columns/Column';
import { Entity } from 'typeorm/decorator/entity/Entity';
import { Audit } from './audit';

@Entity('rediton_uemo')
export class ReditonUemo extends Audit {
    @Column({nullable:true})
    site: string;

    @Column({nullable:false})
    date: string;

    @Column({nullable:false})
    heure: string;

    @Column({nullable:false})
    immatricule: string;

    @Column({nullable:false})
    conducteur: string;

    @Column({nullable:false})
    produit: string;

    @Column({nullable:false})
    provenance: string;

    @Column({nullable:false})
    client: string;

    @Column({nullable:false})
    classe: string;

    @Column({nullable:false})
    ess1: string;

    @Column({nullable:false})
    ess2: string;

    @Column({nullable:false})
    ess3: string;

    @Column({nullable:false})
    ess4: string;

    @Column({nullable:false})
    ess5: string;

    @Column({nullable:false})
    ess6: string;

    @Column({nullable:false})
    ess7: string;

    @Column({nullable:false})
    ess8: string;

    @Column({nullable:false})
    ess9: string;

    @Column({nullable:false})
    Gpe1: string;

    @Column({nullable:false})
    Gpe2: string;

    @Column({nullable:false})
    Gpe3: string;

    @Column({nullable:false})
    Gpe4: string;

    @Column({nullable:false})
    surchGpe1: string;

    @Column({nullable:false})
    surchGpe2: string;

    @Column({nullable:false})
    surchGpe4: string;

    @Column({nullable:false})
    surchGpe3: string;

    @Column({nullable:false})
    PdsTotal: string;

    @Column({nullable:false})
    surchtotal: string;
    

}
