import { Component, computed, input } from '@angular/core';
import { Film } from '../../../../core/models/film.model';
import { TreeNode } from 'primeng/api';
import { TreeModule } from 'primeng/tree';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { label } from '@primeuix/themes/aura/metergroup';

@Component({
  selector: 'app-film-tree',
  imports: [OrganizationChartModule],
  templateUrl: './film-tree.html',
  styleUrl: './film-tree.scss',
})
export class FilmTree {

  film = input.required<Film>();
  selectedNodes!: TreeNode[];
  filmNodes = computed<TreeNode[]>(() => {
    const f = this.film();
    return [
      {
        key: f.id,
        label: f.title,
        expanded: true,
        icon: 'pi pi-video',
        children: [
          {
            label: 'Detalles Técnicos',
            icon: 'pi pi-info-circle',
            children: [
              { label: `Título Original: ${f.original_title}`, icon: 'pi pi-language' },
              { label: `Director: ${f.director}`, icon: 'pi pi-user' },
              { label: `Productor: ${f.producer}`, icon: 'pi pi-users' },
              { label: `Año: ${f.release_date}`, icon: 'pi pi-calendar' },
              { label: `Duración: ${f.running_time} min`, icon: 'pi pi-clock' }
            ]
          },
          {
            label: 'Recursos Relacionados',
            icon: 'pi pi-paperclip',
            children: [
              {
                label: `Personajes (${f.people.length})`, icon: 'pi pi-user-edit',
              },
              { label: `Especies (${f.species.length})`, icon: 'pi pi-tags' },
              { label: `Vehículos (${f.vehicles.length})`, icon: 'pi pi-car' }
            ]
          },
          {
            label: 'Calificaciones',
            icon: 'pi pi-chart-bar',
            children: [
              { label: `Rotten Tomatoes: ${f.rt_score}%`, icon: 'pi pi-star-fill' }
            ]
          }
        ]
      }
    ];

  });
}
