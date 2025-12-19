declare namespace Popolo {
  interface Event {
    id?: string;
    name?: string;
    description?: string;
    start_date?: string;
    end_date?: string;
    location?: string;
    status?: string;
    identifiers?: Identifier[];
    classification?: string;
    organization_id?: string;
    organization?: Organization;
    attendees?: Person[];
    parent_id?: string;
    parent?: Event;
    children?: Event[];
    created_at?: string;
    updated_at?: string;
    sources?: Link[];
  }
}
