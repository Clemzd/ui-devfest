import { Injectable } from "@nestjs/common";
import { RobotDto } from "./robot.dto";
import { robotModel } from "../schemas/robot.schema";
import { IRobot } from "./robot.interface";

@Injectable()
export class RobotDao {

  /**
* Mise à jour des informations liées à l'image avec les nouvelles informations
* @param robotId id de l'image à mettre à jour
* @param robotDto Nouveau contenu des données
*/
  async editRobot(robotId, robotDto: RobotDto, callback): Promise<IRobot> {
    delete robotDto._id;
    return robotModel
      .findByIdAndUpdate(robotId, robotDto, callback);
  }

  /**
   * Fonction qui récupère une image en base
   */
  getRobot(robotId): Promise<IRobot> {
    return robotModel.findById(robotId);
  }

  findRobot(filter): Promise<IRobot> {
    return robotModel.findOne(filter, 'id');
  }

  /**
   * Fonction qui récupère une image en base
   */
  getRobots(): Promise<IRobot[]> {
    return robotModel.find().exec();
  }

  /**
   * 
   * @param ip Ajout d'un nouveau robot avec son IP
   */
  ajoutRobot(ip: string): Promise<IRobot[]>{
    const robot = new robotModel({
      ip: ip
    });
    return robot.save();
  }
}