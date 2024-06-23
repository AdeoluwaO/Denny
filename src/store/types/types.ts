export interface QuickPay {
    name: string, 
    amount: number;
    network_id: number;
    /* SERVICE TYPE REPRESENTS E.G THE AIRTIME TYPE (VTU) OR DATA TYPE */
    service_type: "airtime" | "data" | "cable" | "electricity";
    type: string;
    phone_number: string;
    user_id: string;
}