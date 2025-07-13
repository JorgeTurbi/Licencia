import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  LucideAngularModule,
  Search,
  Filter,
  Edit,
  Trash,
  Plus
} from 'lucide-angular';

@Component({
  selector: 'app-diagnosis-dialog',
  standalone: true,
  imports: [CommonModule, FormsModule, LucideAngularModule],
  templateUrl: './diagnosis-dialog.html',
  styleUrls: ['./diagnosis-dialog.css'],
})
export class DiagnosisDialogComponent {
  @Input() isOpen = false;
  @Output() close = new EventEmitter<void>();
  @Input() isNew:boolean =false;
  name = '';
  category = '';
  description = '';
  searchTerm = '';
  activeTab = 'all';

  Search = Search;
  Filter = Filter;
  Edit = Edit;
  Trash = Trash;
  Plush=Plus;

  categories: string[] = ['Cardiología', 'Neurología', 'Gastroenterología', 'Traumatología', 'General'];

  diagnoses: { name: string; category: string; description: string }[] = [];
  isEditMode = false;
  editIndex: number | null = null;

  closeDialog() {
    this.close.emit();
    this.resetForm();
  }

  onBackdropClick(event: MouseEvent) {
    if ((event.target as HTMLElement).classList.contains('backdrop')) {
      this.closeDialog();
    }
  }

  // @HostListener('document:keydown.escape', ['$event'])
  onEscapeKey(event: any) {
    this.closeDialog();
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  filteredDiagnoses() {
    return this.diagnoses.filter(d => {
      const matchesCategory = this.activeTab === 'all' || d.category === this.activeTab;
      const matchesSearch = d.name.toLowerCase().includes(this.searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }

  handleAddDiagnosis() {
    if (!this.name.trim()) return;

    const newDiagnosis = {
      name: this.name,
      category: this.category || 'General',
      description: this.description || '',
    };

    if (this.isEditMode && this.editIndex !== null) {
      this.diagnoses[this.editIndex] = newDiagnosis;
    } else {
      this.diagnoses.push(newDiagnosis);
    }

    this.resetForm();
  }

  editDiagnosis(index: number) {
    const d = this.diagnoses[index];
    this.name = d.name;
    this.category = d.category;
    this.description = d.description;
    this.editIndex = index;
    this.isEditMode = true;
  }

  openNewDiagnosis() {
    this.isNew=true;
    this.resetForm();
    this.isEditMode = false;
  }

  deleteDiagnosis(index: number) {
    this.diagnoses.splice(index, 1);
    if (this.editIndex === index) {
      this.resetForm();
    }
  }

  private resetForm() {
    this.name = '';
    this.category = '';
    this.description = '';
    this.editIndex = null;
    this.isEditMode = false;
  }
}
