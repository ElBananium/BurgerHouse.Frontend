export abstract class ILoadingStateService
{
    public abstract IsLoading() : boolean;

    public abstract StartLoading() : void;

    public abstract StopLoading() : void;
}


export class LoadingStateService implements ILoadingStateService
{
    private isLoading = false;

    public IsLoading(): boolean {
        return this.isLoading;
    }
    public StartLoading(): void {
        if(this.isLoading) throw new Error("Is loading now");

        this.isLoading = true;
    }
    public StopLoading(): void {
        if(!this.isLoading) throw new Error("Now not loading");

        this.isLoading = false;
    }
    
}