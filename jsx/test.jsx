return (
    <ECElement
        value={this.state.terms}
        label={'Terms'}>
    </ECElement>
        
    <ECAuthElement
        user={this.state.user}
        disabled={this.state.loading}
        >
    </ECAuthElement>
)