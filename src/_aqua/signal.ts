/**
 *
 * This file is auto-generated. Do not edit manually: changes may be erased.
 * Generated by Aqua compiler: https://github.com/fluencelabs/aqua/.
 * If you find any bugs, please write an issue on GitHub: https://github.com/fluencelabs/aqua/issues
 * Aqua version: 0.7.3-319
 *
 */
import { Fluence, FluencePeer } from '@fluencelabs/fluence';
import {
    CallParams,
    callFunction,
    registerService,
} from '@fluencelabs/fluence/dist/internal/compilerSupport/v3';


// Services

export interface SignalDef {
    create: (username: string, callParams: CallParams<'username'>) => { id: string; identityKey: number[]; preKeyId: number | null; preKeyPublic: number[]; registrationId: number; signedPreKeyId: number; signedPreKeyPublic: number[]; signedPreKeySignature: number[]; username: string; } | Promise<{ id: string; identityKey: number[]; preKeyId: number | null; preKeyPublic: number[]; registrationId: number; signedPreKeyId: number; signedPreKeyPublic: number[]; signedPreKeySignature: number[]; username: string; }>;
    decrypt: (data: number[], from: string, callParams: CallParams<'data' | 'from'>) => { content: number[] | null; error: string | null; success: boolean; } | Promise<{ content: number[] | null; error: string | null; success: boolean; }>;
    encrypt: (data: number[], to: string, identity: { id: string; identityKey: number[]; preKeyId: number | null; preKeyPublic: number[]; registrationId: number; signedPreKeyId: number; signedPreKeyPublic: number[]; signedPreKeySignature: number[]; username: string; } | null, callParams: CallParams<'data' | 'to' | 'identity'>) => { content: number[] | null; error: string | null; success: boolean; } | Promise<{ content: number[] | null; error: string | null; success: boolean; }>;
    get_identity: (callParams: CallParams<null>) => { id: string; identityKey: number[]; preKeyId: number | null; preKeyPublic: number[]; registrationId: number; signedPreKeyId: number; signedPreKeyPublic: number[]; signedPreKeySignature: number[]; username: string; } | Promise<{ id: string; identityKey: number[]; preKeyId: number | null; preKeyPublic: number[]; registrationId: number; signedPreKeyId: number; signedPreKeyPublic: number[]; signedPreKeySignature: number[]; username: string; }>;
    get_username: (callParams: CallParams<null>) => string | Promise<string>;
    register_identity: (identity: { id: string; identityKey: number[]; preKeyId: number | null; preKeyPublic: number[]; registrationId: number; signedPreKeyId: number; signedPreKeyPublic: number[]; signedPreKeySignature: number[]; username: string; }, callParams: CallParams<'identity'>) => { error: string | null; success: boolean; } | Promise<{ error: string | null; success: boolean; }>;
    set_username: (username: string, callParams: CallParams<'username'>) => void | Promise<void>;
    sign: (data: number[], callParams: CallParams<'data'>) => { error: string | null; signature: number[] | null; success: boolean; } | Promise<{ error: string | null; signature: number[] | null; success: boolean; }>;
    verify: (signature: number[], data: number[], callParams: CallParams<'signature' | 'data'>) => boolean | Promise<boolean>;
    verify_for: (signature: number[], data: number[], id: string, callParams: CallParams<'signature' | 'data' | 'id'>) => boolean | Promise<boolean>;
}
export function registerSignal(service: SignalDef): void;
export function registerSignal(serviceId: string, service: SignalDef): void;
export function registerSignal(peer: FluencePeer, service: SignalDef): void;
export function registerSignal(peer: FluencePeer, serviceId: string, service: SignalDef): void;
       

export function registerSignal(...args: any) {
    registerService(
        args,
        {
    "defaultServiceId" : "signal",
    "functions" : {
        "tag" : "labeledProduct",
        "fields" : {
            "create" : {
                "tag" : "arrow",
                "domain" : {
                    "tag" : "labeledProduct",
                    "fields" : {
                        "username" : {
                            "tag" : "scalar",
                            "name" : "string"
                        }
                    }
                },
                "codomain" : {
                    "tag" : "unlabeledProduct",
                    "items" : [
                        {
                            "tag" : "struct",
                            "name" : "Identity",
                            "fields" : {
                                "preKeyPublic" : {
                                    "tag" : "array",
                                    "type" : {
                                        "tag" : "scalar",
                                        "name" : "u8"
                                    }
                                },
                                "username" : {
                                    "tag" : "scalar",
                                    "name" : "string"
                                },
                                "registrationId" : {
                                    "tag" : "scalar",
                                    "name" : "u8"
                                },
                                "identityKey" : {
                                    "tag" : "array",
                                    "type" : {
                                        "tag" : "scalar",
                                        "name" : "u8"
                                    }
                                },
                                "signedPreKeyId" : {
                                    "tag" : "scalar",
                                    "name" : "u8"
                                },
                                "preKeyId" : {
                                    "tag" : "option",
                                    "type" : {
                                        "tag" : "scalar",
                                        "name" : "u8"
                                    }
                                },
                                "id" : {
                                    "tag" : "scalar",
                                    "name" : "string"
                                },
                                "signedPreKeyPublic" : {
                                    "tag" : "array",
                                    "type" : {
                                        "tag" : "scalar",
                                        "name" : "u8"
                                    }
                                },
                                "signedPreKeySignature" : {
                                    "tag" : "array",
                                    "type" : {
                                        "tag" : "scalar",
                                        "name" : "u8"
                                    }
                                }
                            }
                        }
                    ]
                }
            },
            "decrypt" : {
                "tag" : "arrow",
                "domain" : {
                    "tag" : "labeledProduct",
                    "fields" : {
                        "data" : {
                            "tag" : "array",
                            "type" : {
                                "tag" : "scalar",
                                "name" : "u8"
                            }
                        },
                        "from" : {
                            "tag" : "scalar",
                            "name" : "string"
                        }
                    }
                },
                "codomain" : {
                    "tag" : "unlabeledProduct",
                    "items" : [
                        {
                            "tag" : "struct",
                            "name" : "DecryptionResult",
                            "fields" : {
                                "content" : {
                                    "tag" : "option",
                                    "type" : {
                                        "tag" : "array",
                                        "type" : {
                                            "tag" : "scalar",
                                            "name" : "u8"
                                        }
                                    }
                                },
                                "error" : {
                                    "tag" : "option",
                                    "type" : {
                                        "tag" : "scalar",
                                        "name" : "string"
                                    }
                                },
                                "success" : {
                                    "tag" : "scalar",
                                    "name" : "bool"
                                }
                            }
                        }
                    ]
                }
            },
            "encrypt" : {
                "tag" : "arrow",
                "domain" : {
                    "tag" : "labeledProduct",
                    "fields" : {
                        "data" : {
                            "tag" : "array",
                            "type" : {
                                "tag" : "scalar",
                                "name" : "u8"
                            }
                        },
                        "to" : {
                            "tag" : "scalar",
                            "name" : "string"
                        },
                        "identity" : {
                            "tag" : "option",
                            "type" : {
                                "tag" : "struct",
                                "name" : "Identity",
                                "fields" : {
                                    "preKeyPublic" : {
                                        "tag" : "array",
                                        "type" : {
                                            "tag" : "scalar",
                                            "name" : "u8"
                                        }
                                    },
                                    "username" : {
                                        "tag" : "scalar",
                                        "name" : "string"
                                    },
                                    "registrationId" : {
                                        "tag" : "scalar",
                                        "name" : "u8"
                                    },
                                    "identityKey" : {
                                        "tag" : "array",
                                        "type" : {
                                            "tag" : "scalar",
                                            "name" : "u8"
                                        }
                                    },
                                    "signedPreKeyId" : {
                                        "tag" : "scalar",
                                        "name" : "u8"
                                    },
                                    "preKeyId" : {
                                        "tag" : "option",
                                        "type" : {
                                            "tag" : "scalar",
                                            "name" : "u8"
                                        }
                                    },
                                    "id" : {
                                        "tag" : "scalar",
                                        "name" : "string"
                                    },
                                    "signedPreKeyPublic" : {
                                        "tag" : "array",
                                        "type" : {
                                            "tag" : "scalar",
                                            "name" : "u8"
                                        }
                                    },
                                    "signedPreKeySignature" : {
                                        "tag" : "array",
                                        "type" : {
                                            "tag" : "scalar",
                                            "name" : "u8"
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                "codomain" : {
                    "tag" : "unlabeledProduct",
                    "items" : [
                        {
                            "tag" : "struct",
                            "name" : "EncryptionResult",
                            "fields" : {
                                "content" : {
                                    "tag" : "option",
                                    "type" : {
                                        "tag" : "array",
                                        "type" : {
                                            "tag" : "scalar",
                                            "name" : "u8"
                                        }
                                    }
                                },
                                "error" : {
                                    "tag" : "option",
                                    "type" : {
                                        "tag" : "scalar",
                                        "name" : "string"
                                    }
                                },
                                "success" : {
                                    "tag" : "scalar",
                                    "name" : "bool"
                                }
                            }
                        }
                    ]
                }
            },
            "get_identity" : {
                "tag" : "arrow",
                "domain" : {
                    "tag" : "nil"
                },
                "codomain" : {
                    "tag" : "unlabeledProduct",
                    "items" : [
                        {
                            "tag" : "struct",
                            "name" : "Identity",
                            "fields" : {
                                "preKeyPublic" : {
                                    "tag" : "array",
                                    "type" : {
                                        "tag" : "scalar",
                                        "name" : "u8"
                                    }
                                },
                                "username" : {
                                    "tag" : "scalar",
                                    "name" : "string"
                                },
                                "registrationId" : {
                                    "tag" : "scalar",
                                    "name" : "u8"
                                },
                                "identityKey" : {
                                    "tag" : "array",
                                    "type" : {
                                        "tag" : "scalar",
                                        "name" : "u8"
                                    }
                                },
                                "signedPreKeyId" : {
                                    "tag" : "scalar",
                                    "name" : "u8"
                                },
                                "preKeyId" : {
                                    "tag" : "option",
                                    "type" : {
                                        "tag" : "scalar",
                                        "name" : "u8"
                                    }
                                },
                                "id" : {
                                    "tag" : "scalar",
                                    "name" : "string"
                                },
                                "signedPreKeyPublic" : {
                                    "tag" : "array",
                                    "type" : {
                                        "tag" : "scalar",
                                        "name" : "u8"
                                    }
                                },
                                "signedPreKeySignature" : {
                                    "tag" : "array",
                                    "type" : {
                                        "tag" : "scalar",
                                        "name" : "u8"
                                    }
                                }
                            }
                        }
                    ]
                }
            },
            "get_username" : {
                "tag" : "arrow",
                "domain" : {
                    "tag" : "nil"
                },
                "codomain" : {
                    "tag" : "unlabeledProduct",
                    "items" : [
                        {
                            "tag" : "scalar",
                            "name" : "string"
                        }
                    ]
                }
            },
            "register_identity" : {
                "tag" : "arrow",
                "domain" : {
                    "tag" : "labeledProduct",
                    "fields" : {
                        "identity" : {
                            "tag" : "struct",
                            "name" : "Identity",
                            "fields" : {
                                "preKeyPublic" : {
                                    "tag" : "array",
                                    "type" : {
                                        "tag" : "scalar",
                                        "name" : "u8"
                                    }
                                },
                                "username" : {
                                    "tag" : "scalar",
                                    "name" : "string"
                                },
                                "registrationId" : {
                                    "tag" : "scalar",
                                    "name" : "u8"
                                },
                                "identityKey" : {
                                    "tag" : "array",
                                    "type" : {
                                        "tag" : "scalar",
                                        "name" : "u8"
                                    }
                                },
                                "signedPreKeyId" : {
                                    "tag" : "scalar",
                                    "name" : "u8"
                                },
                                "preKeyId" : {
                                    "tag" : "option",
                                    "type" : {
                                        "tag" : "scalar",
                                        "name" : "u8"
                                    }
                                },
                                "id" : {
                                    "tag" : "scalar",
                                    "name" : "string"
                                },
                                "signedPreKeyPublic" : {
                                    "tag" : "array",
                                    "type" : {
                                        "tag" : "scalar",
                                        "name" : "u8"
                                    }
                                },
                                "signedPreKeySignature" : {
                                    "tag" : "array",
                                    "type" : {
                                        "tag" : "scalar",
                                        "name" : "u8"
                                    }
                                }
                            }
                        }
                    }
                },
                "codomain" : {
                    "tag" : "unlabeledProduct",
                    "items" : [
                        {
                            "tag" : "struct",
                            "name" : "RegisterResult",
                            "fields" : {
                                "error" : {
                                    "tag" : "option",
                                    "type" : {
                                        "tag" : "scalar",
                                        "name" : "string"
                                    }
                                },
                                "success" : {
                                    "tag" : "scalar",
                                    "name" : "bool"
                                }
                            }
                        }
                    ]
                }
            },
            "set_username" : {
                "tag" : "arrow",
                "domain" : {
                    "tag" : "labeledProduct",
                    "fields" : {
                        "username" : {
                            "tag" : "scalar",
                            "name" : "string"
                        }
                    }
                },
                "codomain" : {
                    "tag" : "nil"
                }
            },
            "sign" : {
                "tag" : "arrow",
                "domain" : {
                    "tag" : "labeledProduct",
                    "fields" : {
                        "data" : {
                            "tag" : "array",
                            "type" : {
                                "tag" : "scalar",
                                "name" : "u8"
                            }
                        }
                    }
                },
                "codomain" : {
                    "tag" : "unlabeledProduct",
                    "items" : [
                        {
                            "tag" : "struct",
                            "name" : "SignResult",
                            "fields" : {
                                "error" : {
                                    "tag" : "option",
                                    "type" : {
                                        "tag" : "scalar",
                                        "name" : "string"
                                    }
                                },
                                "signature" : {
                                    "tag" : "option",
                                    "type" : {
                                        "tag" : "array",
                                        "type" : {
                                            "tag" : "scalar",
                                            "name" : "u8"
                                        }
                                    }
                                },
                                "success" : {
                                    "tag" : "scalar",
                                    "name" : "bool"
                                }
                            }
                        }
                    ]
                }
            },
            "verify" : {
                "tag" : "arrow",
                "domain" : {
                    "tag" : "labeledProduct",
                    "fields" : {
                        "signature" : {
                            "tag" : "array",
                            "type" : {
                                "tag" : "scalar",
                                "name" : "u8"
                            }
                        },
                        "data" : {
                            "tag" : "array",
                            "type" : {
                                "tag" : "scalar",
                                "name" : "u8"
                            }
                        }
                    }
                },
                "codomain" : {
                    "tag" : "unlabeledProduct",
                    "items" : [
                        {
                            "tag" : "scalar",
                            "name" : "bool"
                        }
                    ]
                }
            },
            "verify_for" : {
                "tag" : "arrow",
                "domain" : {
                    "tag" : "labeledProduct",
                    "fields" : {
                        "signature" : {
                            "tag" : "array",
                            "type" : {
                                "tag" : "scalar",
                                "name" : "u8"
                            }
                        },
                        "data" : {
                            "tag" : "array",
                            "type" : {
                                "tag" : "scalar",
                                "name" : "u8"
                            }
                        },
                        "id" : {
                            "tag" : "scalar",
                            "name" : "string"
                        }
                    }
                },
                "codomain" : {
                    "tag" : "unlabeledProduct",
                    "items" : [
                        {
                            "tag" : "scalar",
                            "name" : "bool"
                        }
                    ]
                }
            }
        }
    }
}
    );
}
      
// Functions

