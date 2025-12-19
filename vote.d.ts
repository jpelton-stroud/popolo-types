declare namespace Popolo {
  interface Vote {
    id?: string;
    vote_event_id?: string;
    vote_event?: VoteEvent;
    voter_id?: string;
    voter?: Person;
    option?: string;
    group_id?: string;
    group?: Organization[];
    role?: string;
    weight?: number;
    pair_id?: string;
    pair?: Person;
  }
  interface VoteCount {
    option: string;
    value: number;
    group_id?: string;
    group?: Organization;
  }
  interface VoteEvent {
    id?: string;
    organization_id?: string;
    organization?: Organization;
    legislative_session_id?: string;
    legislative_session?: {}; //TODO: after legislative_session
    identifier?: Identifier;
    motion_id?: string;
    motion?: Motion;
    classification?: string;
    start_date?: string;
    end_date?: string;
    result?: string;
    group_results: {}[]; //TODO: after group_results
    counts: {}[]; //TODO: after counts
    created_at?: string;
    updated_at?: string;
    sources?: Link[];
  }
}
