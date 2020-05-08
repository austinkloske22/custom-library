using custom.library as my from '../db/data-model.cds';

service CatalogService {
	
	entity Pdfs @(
		Capabilities: {
			InsertRestrictions: {Insertable: true},
			UpdateRestrictions: {Updatable: true},
			DeleteRestrictions: {Deletable: true}
		}
	) as projection on my.Pdf;
}