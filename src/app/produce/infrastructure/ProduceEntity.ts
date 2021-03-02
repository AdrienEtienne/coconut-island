import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: "Produces"})
export class ProduceEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({unique: true, length: 50, nullable: false})
  name: string;

  /**
   * Premier mois de la saison.
   * Valeur est entre 1 et 12: le premier mois de la saison.
   * Valeur est autre: pas de saison, la disponibilité est annuelle.
   * @default 0 Par default la disponibilité est annuelle.
   */
  @Column({type: "smallint", default: 0})
  seasonFirstMonth = 0;

  /**
   * Le nombre de mois de la saison.
   * Valeur est entre 1 et 11: le nombre de mois de la saison.
   * Valeur est autre: pas de saison, la disponibilité est annuelle.
   * @default 0 Par default la disponibilité est annuelle.
   */
  @Column({type: "smallint", default: 0})
  seasonMonthsCount = 0;
}
