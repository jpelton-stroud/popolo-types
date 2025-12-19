declare namespace Popolo {
  interface Motion {
    id?: string;
    organization_id?: string;
    organization?: Organization;
    legislative_session_id?: string;
    legislative_session?: {}; //TODO: after legislative_session
    creator_id?: string;
    creator?: Person;
    text?: string;
    identifier?: Identifier;
    date?: string;
    classification?: string;
    requirement?: string;
    result?: string;
    vote_events?: VoteEvent[];
    created_at?: string;
    updated_at?: string;
    sources?: Link[];
  }
}
