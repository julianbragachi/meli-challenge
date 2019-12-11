interface Snapshot {
  url: string;
  width: number;
  height: number;
  status: string;
}

export interface ItemDescriptionMeliResponse {
  id: string;
  created: Date;
  text: string;
  plain_text: string;
  snapshot: Snapshot;
}
