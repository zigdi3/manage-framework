import { Injectable } from "@angular/core";
import { ButtonCustomComponent } from "primeng-custom";

@Injectable({ providedIn: 'root'})
export class FrameworkDesignService{
    private instances: ButtonCustomComponent[] = [];

    register( instance: ButtonCustomComponent){
        this.instances.push(instance);
    }

    unregister( instance: ButtonCustomComponent){
        const index = this.instances.indexOf(instance);
        if (index !== -1) {
            this.instances.splice(index, 1);
          }
        }
}