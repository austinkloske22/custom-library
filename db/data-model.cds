namespace custom.library;

using {managed} from '@sap/cds/common';

entity Pdf : managed {
	key UUID				: UUID;
	ID						: String(60);
	Type					: String(60);
	Description				: String(255);
	Encoding				: String(60);
	Content					: LargeString;
};